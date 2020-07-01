const Discord = require("discord.js");
const botconfig = require("../config.json");
const creator = require('../creator.json');
// Its Fine If you want To change it in Your Bot Folder Its fine.... :V
    module.exports.run = async (bot, message, args) => {
        const lol = ["Look At This Noob Server", "Look At This Pro Server"]
        const random = lol[Math.floor(Math.random() * lol.length)];

        const embed = new Discord.MessageEmbed()
        .setTitle('Server Information')
        .setFooter(`${random} | ${bot.user.username}`)
        .setDescription(`
        **Server Name:** ${message.guild.name}\n**Server Owner:** ${message.guild.owner.user.tag}\n**Total Members:** ${message.guild.memberCount}`)
        .setColor('#25c059')
        .setTimestamp()
    
    message.channel.send(embed);
   
}
module.exports.config = {
    name: "serverinfo",
    description: "Showing Information Of The Server",
    usage: `${botconfig.prefix}serverinfo`,
    accessableby: "Members",
    aliases: ['si']
}