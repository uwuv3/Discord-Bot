/**
 * @type {import("events").EventEmitter}
 */
const events = global.events;
events.on("READY", (x) => {
  console.log("Bota websocket ile bağlandım");
  console.log("Botun kullanıcı ID: " + x.user.id);
  console.log(
    "Botun kullanıcı ismi: " + x.user.username + "#" + x.user.discriminator
  );
});
