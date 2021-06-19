const { Command } = require("discord.js-commando");
const FightPhrases = require("../../phrases/fight.json");

module.exports = class FightCommand extends Command {
  constructor(client) {
    super(client, {
      name: "fight",
      memberName: "fight",
      group: "fun",
      description: "Fight a member",
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
        return message.channel.send("I am a robot, you would lose!");
      } else if (member.id === message.author.id) {
        return message.channel.send(
          `${message.member} fought themselves in confusion...`
        );
      } else {
        const good =
          FightPhrases.good[
            Math.floor(Math.random() * FightPhrases.good.length)
          ];
        const fail =
          FightPhrases.fail[
            Math.floor(Math.random() * FightPhrases.fail.length)
          ];
        const phrases = [
          `${member.user} is getting hit by ${message.member} with ${good}.`,
          `${message.member} tried to fight ${member.user} with ${fail} but it wasn't that good..`,
        ];
        return message.channel.send(
          phrases[Math.floor(Math.random() * phrases.length)]
        );
      }
    } else {
      return message.channel.send(`You need to ping someone to fight`);
    }
  }
};
