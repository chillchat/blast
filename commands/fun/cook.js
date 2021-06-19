const { Command } = require("discord.js-commando");
const CookPhrases = require("../../phrases/cook.json");

module.exports = class CookCommand extends Command {
  constructor(client) {
    super(client, {
      name: "cook",
      memberName: "cook",
      group: "fun",
      description: "Cook a member",
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
        return message.channel.send("You can not cook me!");
      } else if (member.id === message.author.id) {
        return message.channel.send("You can not cook yourself!");
      } else {
        const pan =
          CookPhrases.pans[Math.floor(Math.random() * CookPhrases.pans.length)];
        const item =
          CookPhrases.objects[
            Math.floor(Math.random() * CookPhrases.objects.length)
          ];
        const phrases = [
          `${member.user} is getting cooked by ${message.member} with a ${pan} along with some ${item}.`,
          `${message.member} tried to cook ${member.user} with a bad pan but it wasn't that good...`,
        ];
        return message.channel.send(
          phrases[Math.floor(Math.random() * phrases.length)]
        );
      }
    } else {
      return message.channel.send(`You need to ping someone to cook`);
    }
  }
};
