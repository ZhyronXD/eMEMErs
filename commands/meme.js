const Discord = require('discord.js');
const botconfig = require('../config.json');
const randomPuppy = require('random-puppy');
const creator = require('../creator.json');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["meme", "me_irl", "dankmemer"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setFooter(`Look At This Meme | ${bot.user.username}`)
    .setURL(`http://reddit.com/${random}`)

    message.channel.send(embed);
}

module.exports.config = {
    name: "meme",
    description: "Showing Random meme",
    usage: `${botconfig.prefix}meme`,
    accessableby: "Members",
    aliases: []
}
