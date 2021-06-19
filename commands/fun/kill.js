const { Command } = require("discord.js-commando");

module.exports = class KillCommand extends Command {
  constructor(client) {
    super(client, {
      name: "kill",
      memberName: "kill",
      group: "fun",
      description: "Kill a member",
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
        return message.channel.send("I'm sorry, `death.js` wasn't located.");
      } else if (member.id === message.author.id) {
        return message.channel.send("You can't kill yourself.");
      } else {
        const phrases = [
          `${member.user} fell off a ladder`,
          `${member.user} fell off some vines`,
          `${member.user} fell off some weeping vines`,
          `${member.user} fell off some twisting vines`,
          `${member.user} fell off a scaffolding`,
          `${member.user} fell while climbing`,
          `${member.user} fell from a high place`,
          `${member.user} was doomed to fall`,
          `${member.user} was doomed to fall by ${message.member}`,
          `${member.user} fell too far and was finished by ${message.member}`,
          `${member.user} was struck by lightning`,
          `${member.user} was struck by lightning whilst fighting ${message.member}`,
          `${member.user} went up in flames`,
          `${member.user} walked into fire whilst fighting ${message.member}`,
          `${member.user} burned to death`,
          `${member.user} was burnt to a crisp whilst fighting ${message.member}`,
          `${member.user} tried to swim in lava`,
          `${member.user} tried to swim in lava to escape ${message.member}`,
          `${member.user} discovered the floor was lava`,
          `${member.user} walked into danger zone due to ${message.member}`,
          `${member.user} suffocated in a wall`,
          `${member.user} suffocated in a wall whilst fighting ${message.member}`,
          `${member.user} was squished too much`,
          `${member.user} was squashed by ${message.member}`,
          `${member.user} drowned`,
          `${member.user} drowned whilst trying to escape ${message.member}`,
          `${member.user} starved to death`,
          `${member.user} starved to death whilst fighting ${message.member}`,
          `${member.user} was pricked to death`,
          `${member.user} walked into a cactus whilst trying to escape ${message.member}`,
          `${member.user} died`,
          `${member.user} died because of ${message.member}`,
          `${member.user} blew up`,
          `${member.user} was blown up by ${message.member}`,
          `${member.user} was killed by magic`,
          `${member.user} was killed by magic whilst trying to escape ${message.member}`,
          `${member.user} was killed by even more magic`,
          `${member.user} withered away`,
          `${member.user} withered away whilst fighting ${message.member}`,
          `${member.user} was squashed by a falling anvil`,
          `${member.user} was squashed by a falling anvil whilst fighting ${message.member}`,
          `${member.user} was squashed by a falling block`,
          `${member.user} was squashed by a falling block whilst fighting ${message.member}`,
          `${member.user} was slain by ${message.member}`,
          `${member.user} was slain by ${message.member}`,
          `${member.user} was shot by ${message.member}`,
          `${member.user} was fireballed by ${message.member}`,
          `${member.user} was pummeled by ${message.member}`,
          `${member.user} was killed by ${message.member} using magic`,
          `${member.user} was killed trying to hurt ${message.member}`,
          `${member.user} was killed by %3$s trying to hurt ${message.member}`,
          `${member.user} was impaled by ${message.member}`,
          `${member.user} hit the ground too hard`,
          `${member.user} hit the ground too hard whilst trying to escape ${message.member}`,
          `${member.user} fell out of the world`,
          `${member.user} didn't want to live in the same world as ${message.member}`,
          `${member.user} was roasted in dragon breath`,
          `${member.user} was roasted in dragon breath by ${message.member}`,
          `${member.user} experienced kinetic energy`,
          `${member.user} experienced kinetic energy whilst trying to escape ${message.member}`,
          `${member.user} went off with a bang`,
          `${member.user} went off with a bang whilst fighting ${message.member}`,
          `${member.user} was killed by ${message.member}`,
          `${member.user} was exploded by the bed.`,
          `${member.user} was killed by [Intentional Game Design].`,
          `${member.user} was poked to death by a sweet berry bush`,
          `${member.user} was poked to death by a sweet berry bush whilst trying to escape ${message.member}`,
          `${member.user} was stung to death`,
          `${member.user} was stung to death by ${message.member}`,
        ];
        return message.channel.send(
          phrases[Math.floor(Math.random() * phrases.length)]
        );
      }
    } else {
      return message.channel.send(`You need to ping someone to kill`);
    }
  }
};
