const { Command } = require("discord.js-commando");

module.exports = class PokeCommand extends Command {
  constructor(client) {
    super(client, {
      name: "poke",
      memberName: "poke",
      group: "fun",
      description: "Poke a member",
      guildOnly: true,
    });
  }

  /**
   * @param {import("discord.js").Message} message
   * @return {*}
   */
  run(message) {
    const member = message.mentions.members.first();
    if (member) {
      return message.channel.send(`${member.user} 👈 ${message.member}`);
    } else {
      return message.channel.send(`You need to ping someone to poke`);
    }
  }
};
