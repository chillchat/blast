const { Command } = require("discord.js-commando");
const BakePhrases = require("../../phrases/bake.json");

module.exports = class BakeCommand extends Command {
  constructor(client) {
    super(client, {
      name: "bake",
      memberName: "bake",
      group: "fun",
      description: "Bake a member",
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
        return message.channel.send("You can not bake me!");
      } else if (member.id === message.author.id) {
        return message.channel.send("You can not bake yourself!");
      } else {
        const item =
          BakePhrases[Math.floor(Math.random() * BakePhrases.length)];
        const phrases = [
          `${member.user} is getting baked by ${message.member} in ${item}.`,
          `${message.member} bakes ${member.user} in ${item}.`,
        ];
        return message.channel.send(
          phrases[Math.floor(Math.random() * phrases.length)]
        );
      }
    } else {
      return message.channel.send(`You need to ping someone to bake`);
    }
  }
};
