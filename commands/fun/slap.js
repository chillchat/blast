const { Command } = require("discord.js-commando");
const SlapPhrases = require("../../phrases/slap.json");

module.exports = class SlapCommand extends Command {
  constructor(client) {
    super(client, {
      name: "slap",
      memberName: "slap",
      group: "fun",
      description: "Slap a member",
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
        return message.channel.send(
          `${message.member} slapped themselves in confusion...`
        );
      } else {
        const item =
          SlapPhrases[Math.floor(Math.random() * SlapPhrases.length)];
        return message.channel.send(
          `${message.member} is slapping ${member.user} with ${item}!`
        );
      }
    } else {
      return message.channel.send(`You need to ping someone to slap`);
    }
  }
};
