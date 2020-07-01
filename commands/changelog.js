const Discord = require("discord.js")
const botconfig = require("../config.json");
const creator = require('../creator.json');
//Dont Copy This.. Its Not Important :P
module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor("Changelog List.", bot.user.displayAvatarURL())
        .setDescription(`Bot Name Has Changed to Crystalys Bot\n-\n${botconfig.prefix}creatorinfo Has Created to ${bot.user.username} at 22/June/2020 03:41PM\n-\nPrefix Has Edited from C! to c! at 24/June/2020 12:11PM\n-\nBot Has Been Setup With Heroku.com And Online 24/7 (Ty Heroku.com)\n-\nBot Prefix Has been Edited From c! To C!`)
        .setFooter(`${bot.user.username}`)
        .setColor('RANDOM')
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.config = {
    name: "changelog",
    description: "Changelog List of This bot",
    usage: `${botconfig.prefix}changelog`,
    accessableby: "Members",
    aliases: ['cl']
}
