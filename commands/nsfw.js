const Discord = require('discord.js')
const config = require('../config.json');
const emoji = require('../emoji.json');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor("RANDOM")
    .setDescription(`${emoji.no} Hey ${message.author.tag}!, You Want To See Nsfw Picture Hah? That Not Cool Kids.. ${emoji.no}\n**Go To Hell Soon!**`)
    .setFooter(`${bot.user.username}`)

    message.channel.send(embed);
}

module.exports.config = {
    name: "nsfw",
    description: "Look Go To Hell Kids..",
    usage: `${config.prefix}nsfw`,
    accessableby: "Members",
    aliases: ['porn']
}
