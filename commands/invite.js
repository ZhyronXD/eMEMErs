const Discord = require("discord.js")
const botconfig = require("../config.json");
const creator = require('../creator.json');
//Change The URL with Your Bot Invite URL :)
module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('Here Is My Invite Link.')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=716278759019511871&permissions=8&scope=bot')
    .setFooter(`${bot.user.username}`)
    .setColor('RANDOM')
    .setTimestamp()

message.channel.send(embed);
}

module.exports.config = {
    name: "botinvite",
    description: "Showing Bot Invite Link",
    usage: `${botconfig.prefix}botinvite`,
    accessableby: "Members",
    aliases: ['binv']
}