
const express = require("express");
const app = express();
app.get("*", (r, rs) => rs.send("Naber"));
app.post("*", (r, rs) => rs.send("Naber"));
app.listen(3000);

const botConfig = require("../configs/bot.json");
/** WebSocket */
const WebSocket = require("ws");
const ws = new WebSocket("wss://gateway.discord.gg/?v=10&encoding=json");
/** Event */
const EventEmitter = require("events");
const eventemit = new EventEmitter();
global.events = eventemit;


require("./command/handler");
require("./event/handler");
const token = botConfig.token;
const payload = {
  op: 2,
  d: {
    token: token,
    intents: 131071,
    properties: {
      $os: "Discord Android",
    },
    presence: {
      status: "online",
      since: Date.now() / 1000,
      afk: false,
    },
  },
};

ws.on("open", function open(data) {
  ws.send(JSON.stringify(payload));
});

ws.addEventListener("message", function (event) {
  const payload = event.data;
  // console.log(JSON.parse(payload.toString()))
});

ws.on("message", function incoming(data) {
  let payload = JSON.parse(data);
  const { t, event, op, d } = payload;
  switch (op) {
    case 10:
      const { heartbeat_interval } = d;
      interval = heartbeat(heartbeat_interval);
      break;
  }
  if (!t) return;
  if (!t == "PRESENCE_UPDATE") console.log(t);
  eventemit.emit(t, d);
});

const heartbeat = (ms) => {
  return setInterval(() => {
    ws.send(JSON.stringify({ op: 1, d: null }));
  }, ms);
};
