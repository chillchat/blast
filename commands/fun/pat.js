const { Command } = require("discord.js-commando");

module.exports = class PatCommand extends Command {
  constructor(client) {
    super(client, {
      name: "pat",
      memberName: "pat",
      group: "fun",
      description: "pat a member",
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
        return message.channel.send("`body.js` not found");
      } else if (member.id === message.author.id) {
        return message.channel.send("You pat yourself.");
      } else {
        return message.channel.send(
          `${message.author} proceeds to pat ${member.user}! 👋`
        );
      }
    } else {
      return message.channel.send("You pat the air.");
    }
  }
};
