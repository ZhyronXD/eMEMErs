const Discord = require('discord.js')
const botconfig = require('../config.json');
const creatorinfo = require('../creator.json');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Creator Info`, bot.user.displayAvatarURL())
    .setColor('RANDOM')
    .setFooter(`${bot.user.username}`)
    .addFields(
        {name: '**Creator Name:**', value: `M.N.R (<@${creatorinfo.creator}>)`},
        {name: '**Creator Age:**', value: `I Don't Know? Maybe You Know?`},
        {name: '**Creator Home Address:**', value: `${creatorinfo.address}`},
        {name: '**Creator Friend:**', value: `Rafli (<@${creatorinfo.copembuat}>)`},
        {name: '**Creator Hobbies:**', value: `Coding, Playing a Game, Sleeping, Reading a Book`}
    )
    .setTimestamp()

message.channel.send(embed);
}

module.exports.config = {
    name: 'creatorinfo',
    description: 'Showing Information of the Creator',
    usage: `${botconfig.prefix}creatorinfo`,
    accessableby: 'members',
    aliases: ['ci']
}