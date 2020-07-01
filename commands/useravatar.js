const Discord = require('discord.js');
const moment = require('moment');
const botconfig = require('../config.json');
const creator = require('../creator.json');
//Its Fine B)
module.exports.run = async (bot, message, args) => {
    const lol = ["__Look At This Noob Avatar__", "__Look At This Pro Avatar__"]
    const random = lol[Math.floor(Math.random() * lol.length)];

    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setDescription(`${random}`)
    .setTimestamp()
    .setColor('RANDOM')
    .setFooter(`${bot.user.username}`)
    .setImage(member.user.displayAvatarURL({dynamic: true, size: 2048}))

    message.channel.send(userEmbed);
}

module.exports.config = {
    name: "useravatar",
    description: "Show Your/User Avatar Image",
    usage: `${botconfig.prefix}useravatar`,
    accessableby: "Members",
    aliases: ['ua']
}