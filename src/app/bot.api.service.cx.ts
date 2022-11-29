require('dotenv').config();

// Imports the Google Cloud Some API library
// const { SessionsClient } = require('@google-cloud/dialogflow-cx');
import {SessionsClient} from "@google-cloud/dialogflow-cx/build/src/v3/sessions_client";

const {struct} = require('pb-util');

export class BotApiServiceCx {
  readonly client: SessionsClient;
  readonly agentId: string;
  readonly projectId: string;
  readonly location: string;

  constructor() {
    const tokens = process.env.AGENT_ID!.split(/\//);
    this.projectId = tokens[1];
    this.location = tokens[3];
    this.agentId = tokens[5];
    this.client = new SessionsClient({
      apiEndpoint: this.location === 'global' ? 'dialogflow.googleapis.com' :
          `${this.location}-dialogflow.googleapis.com`,
      projectId: process.env.DF_PROJECT_ID,
      credentials: {
        client_email: process.env.DF_CLIENT_EMAIL,
        private_key: process.env.DF_PRIVATE_KEY!.replace(/\\n/g, '\n')
      },
      language: process.env.LANGUAGE_CODE
    });
  }

  async detectIntentText(intentRequest: any) {
    const sessionPath = process.env.ENVIRONMENT_ID ?
        this.client.projectLocationAgentEnvironmentSessionPath(
            this.projectId,
            this.location,
            this.agentId,
            process.env.ENVIRONMENT_ID,
            intentRequest.sessionId
        ) :
        this.client.projectLocationAgentSessionPath(
          this.projectId,
          this.location,
          this.agentId,
          intentRequest.sessionId
      );


    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: intentRequest?.query || process.env.INITIAL_QUERY,
        },
        languageCode: process.env.LANGUAGE_CODE,
      },
      queryParams: {
        parameters: struct.encode({
          sessionId: intentRequest.sessionId
        })
      }
    };
    const [response] = await this.client.detectIntent(request);

    console.log(`User Query: ${intentRequest?.query}`);
    if (response?.queryResult?.responseMessages) {
      for (const message of response?.queryResult?.responseMessages) {
        if (message.text) {
          console.log(`Agent Response: ${message?.text?.text}`);
        }
      }
    }
    if (response?.queryResult?.match?.intent) {
      console.log(
          `Matched Intent: ${response?.queryResult?.match?.intent?.displayName}`
      );
    }
    console.log(
        `Current Page: ${response?.queryResult?.currentPage?.displayName}`
    );

    return response;
  }

}

