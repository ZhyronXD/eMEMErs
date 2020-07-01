const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let replies = [
    "Yes!",
    "No!",
    "Hmm I don't Know",
    "I think.. Yes",
    "ofcourse Yes",
    "ofcourse No",
    "Nope",
    "What? NO!",
    "OMG Yes!",
    "I Don't Know. Ask Someone",
    "Ask Me Again The Question",
    "IWIBUVVKJASFYU NO!!!",
    "Are You Serious? YES!"
    ];
    
    if(!userArgs) {
    return message.channel.send('How am I going to predict nothing?')
    }

    let result = replies[Math.floor(Math.random()*(replies.length))]

    const embed = new Discord.MessageEmbed()
    .setTitle(':8ball:')
    .setDescription(`**${message.author.tag} Question:**\n${args}\n**My Answer:**\n${result}`)
    .setFooter(`${bot.user.username}`)
    .setColor("RANDOM")
    .setTimestamp()

    message.channel.send(embed);
}


module.exports.config = {
    name: '8ball',
    description: 'Let Me Answer Your Question',
    usage: `${config.prefix}8ball`,
    aliases: ["question", "8b"]
}
