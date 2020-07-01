const Discord = require('discord.js');
const botconfig = require('../config.json');
const creator =require('../creator.json');
const emoji = require('../emoji.json')
module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${bot.user.username} Info`, bot.user.displayAvatarURL())
        .setColor('#45DDC0')
        .setFooter(`${bot.user.username}`)
        .addFields(
            {name: '**Bot Creator:**', value: `<@${creator.creator}>`, inline: true},
            {name: '**Bot Name:**', value: `${bot.user.username}`},
            {name: '**Bot Used In:**', value: `${bot.guilds.cache.size} Server`},
            {name: '**Prefix:**', value: `${botconfig.prefix}`},
            {name: '**Bot Created at:**', value: '1/June/2020 12.55 PM'}
        )
        .setTimestamp()

        message.channel.send(embed);
}

module.exports.config = {
    name:'botinfo',
    description: "Showing Info of The bot",
    usage: `${botconfig.prefix}botinfo`,
    accessableby: "Members",
    aliases: ['bi']
}
