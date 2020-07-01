const Discord = require('discord.js')
const config = require('../config.json');
const emoji = require('../emoji.json')

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Emoji List')
    .setDescription(`${emoji.ban}: Ban\n${emoji.discordlogo}: Discord Logo\n${emoji.silang}: X\n${emoji.benar}: √\n${emoji.yes}: Yes\n${emoji.no}: No\n${emoji.verified}: Verified\n${emoji.flypig}: Flying Pig :V`)
    .setFooter(`${bot.user.username}`)
    .setColor("RANDOM")
    .setTimestamp()

    message.channel.send(embed);
}

module.exports.config = {
    name: 'emojilist',
    description: 'Let Me Show My Emoji List',
    usage: `${config.prefix}emojilist`,
    aliases: ["el"]
}
