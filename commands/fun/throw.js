const { Command } = require("discord.js-commando");

module.exports = class ThrowCommand extends Command {
  constructor(client) {
    super(client, {
      name: "throw",
      memberName: "throw",
      group: "fun",
      description: "Throw a member",
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
      responses = [
        `${message.author} throws ${user}.`,
        `${message.author} failed to throw ${user}.`,
      ];
      return message.channel.send(
        responses[Math.floor(Math.random() * responses.length)]
      );
    } else {
      return message.channel.send(`You need to ping someone to throw`);
    }
  }
};
