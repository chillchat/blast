const { Command } = require("discord.js-commando");

module.exports = class CryCommand extends Command {
  constructor(client) {
    super(client, {
      name: "cry",
      memberName: "cry",
      group: "fun",
      description: "Cry on a member(?)",
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
      if (member.id === this.client.user.id) {
        return message.channel.send("You can not cry on me!");
      } else if (member.id === message.author.id) {
        return message.channel.send("You can't cry on yourself.");
      } else {
        return message.channel.send(
          `${message.author} cries on ${member.user}.`
        );
      }
    } else {
      return message.channel.send(`${message.author} cries.`);
    }
  }
};
