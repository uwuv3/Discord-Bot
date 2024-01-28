/**
 * @type {import("events").EventEmitter}
 */
const events = global.events;
events.on("READY", () => {
  console.log("Bota websocket ile bağlandım");
});
