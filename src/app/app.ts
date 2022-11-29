import {IntentRequest} from "../models/IntentRequest";
import {BotApiServiceCx} from "./bot.api.service.cx";
import {parseChat} from "./utils/chat.utils";

const express = require('express');
const server = express();
const path = require("path");
const bodyParser = require('body-parser');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, "../../.")));

let botApiServiceCx = new BotApiServiceCx();

server.post('/api/messages', async (req: any, res: any) => {
  console.log("------------------------------------------------------------------------")
  console.log("BODY :::", req.body)
  console.log("------------------------------------------------------------------------")
  let tag = req.body.fulfillmentInfo.tag;
  console.log("TAG:::", tag)
  console.log("------------------------------------------------------------------------")
  let sessionId = req.body?.sessionInfo?.parameters?.sessionId;
  // if sessionId doesnt exist, create it
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(7);
  }
  console.log("sessionId:::", sessionId)
  console.log("------------------------------------------------------------------------")
});

/**
 * Entry point to the Interactions API
 */
server.post('/channels/web', async (req: any, res: any) => {

  const body = req.body as IntentRequest;
  // add incomming chat message to mongo chats

  let responseMessages;

  try {
    responseMessages = await botApiServiceCx.detectIntentText(body);
    const response = parseChat(responseMessages?.queryResult?.responseMessages);
    res.status(200).json(response);
  } catch (error) {
    //TODO: log error with morgan & push to sentry
    console.error('Error occurred when calling detectIntent', error);
    res.status(500).send('Error occurred when calling detectIntent');
  }
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log("App is running on port " + PORT);
  console.log('Listening for conversations ... on port ', PORT);
});
