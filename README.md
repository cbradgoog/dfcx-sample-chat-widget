# Sample DFCX Chat Widget

Forked from [github.com/botchway44/covid-vaccine-appointment](https://github.com/botchway44/covid-vaccine-appointment)
with functionality unrelated to DFCX removed.

This repo provides a sample web frontend chat widget built using TypeScript/JavaScript for your DFCX bot.

## Installation

Run the following to install Node dependencies:

```
npm install
```

Copy `.env.default` as `.env` and fill out the following variables:

* `AGENT_ID`: ID of the DFCX agent, in the format of `projects/project-id/locations/location-id/agents/agent-uuid`
* `ENVIRONMENT_ID`: an optional environment ID that this chat widget should connect to
* `DF_PROJECT_ID`: ID of the GCP project whose API quota will be consumed
* `DF_PRIVATE_KEY`: value of the `private_key` field from the service account’s JSON token
* `DF_PRIVATE_KEY_ID`: value of the `private_key_id` field from the service account’s JSON token
* `DF_CLIENT_EMAIL`: value of the `client_email` field from the service account’s JSON token
* `LANGUAGE_CODE`: language of user input
* `INITIAL_QUERY`: initial message sent to DFCX agent to get a response from the Default Welcome Intent

## Running the app

After completing the installation steps, run the following:

```
npm run start:dev
```

Then, open this url in a browser: [http://localhost:9000](http://localhost:9000)

## License

Apache 2.0. See [LICENSE](https://github.com/cbradgoog/dfcx-sample-chat-widget/blob/main/LICENSE).
