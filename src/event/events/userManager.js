
/**
 * @type {import("events").EventEmitter}
 */
const events = global.events;
events.on("GUILD_MEMBER_ADD", async (member) => {
  console.log(member)
});
events.on("GUILD_MEMBER_REMOVE", async (member) => {
  console.log(member)
});
