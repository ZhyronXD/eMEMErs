const Discord = require('discord.js')
const config = require('../config.json');
const emoji = require('../emoji.json');

module.exports.run = async (bot, message, args) => {
    if (message.deletable) {
        message.delete();
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`\n${emoji.no} You Don't Have Permission To Run This Command! ${emoji.no}`);

    const embed = new Discord.MessageEmbed()
    .setTitle(`${emoji.verified} New Announcement ${emoji.verified}`)
    .setDescription(`${args}`)
    .setColor("RANDOM")
    .setTimestamp()

    message.channel.send(embed);
}


module.exports.config = {
    name: 'announcement',
    description: 'Create A New Announcement',
    usage: `${config.prefix}announcement`,
    aliases: ["an"]
}
