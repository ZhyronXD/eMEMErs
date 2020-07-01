const Discord = require("discord.js")
const botconfig = require("../config.json");
const creator = require('../creator.json');
//Its Not Important Dude :V
module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('Here Is My Support Server.')
    .setURL('https://discord.gg/3XTf3dn')
    .setFooter(`${bot.user.username}`)
    .setColor('#277ecd')
    .setTimestamp()

message.channel.send(embed);
}

module.exports.config = {
    name: "support",
    description: "Showing Bot Support Server Link",
    usage: `${botconfig.prefix}support`,
    accessableby: "Members",
    aliases: ["sp"]
}
