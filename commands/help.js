const Discord = require('discord.js');
const botconfig = require("../config.json");
const creator = require('../creator.json');
const emoji = require('../emoji.json')
module.exports.run = async (bot, message, args) => {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if(helpArgs[0] === 'command') {
        return message.reply("Pls Input a Commands")
    }

    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
        .setAuthor(`${bot.user.username} Help`, bot.user.displayAvatarURL())
        .setFooter(`${bot.user.username}`)
        .setDescription(`‣** ${botconfig.prefix}help <command>** For Advance Help.\n‣ See Any Problem With My Bot? Type **${botconfig.prefix}support** And find Problem-Report channel then You can send Any Problem.\n‣ Prefix: ${botconfig.prefix}`)
        .setColor('RANDOM')
         .addFields(
            {name: `${emoji.admins} ‣ **Administration**`, value: '`ban` **|** `kick` **|** `clear` **|** `announcement`'},
            {name: `${emoji.discload} ‣ **Information**`, value: '`botinfo` **|** `changelog` **|** `serverinfo` **|** `userinfo`'},
            {name: `${emoji.flypig} ‣ **Support**`, value: '`support` **|** `supporterlist` **|** `botinvite`'},
            {name: `${emoji.rainbowfrog} ‣ **Fun**`, value: '`meme` **|** `8ball` **|** `howgay` **|** `lucky` **|** `lesbian` **|** `gender` **|** `say` **|** `nsfw`'},
            {name: `${emoji.admin} ‣ **Other**`, value: '`useravatar`'}
        )
        .setTimestamp()

    message.channel.send(embed);
}

if(helpArgs[0]) {
    let command = helpArgs[0];

    if(bot.commands.has(command)) {
        
        command = bot.commands.get(command);
        var embed = new Discord.MessageEmbed()
        .setAuthor(`${command.config.name} Command`)
        .setDescription(`
        **Command Description:** ${command.config.description || "There is no Description for this command."}\n\n**Command Usage:** ${command.config.usage || "No Usage"}\n\n**Command Permissions:** ${command.config.accessableby || "Members"}`)
        .setColor('RANDOM')

    message.channel.send(embed);
}}
}


module.exports.config = {
    name: "help",
    description: "Showing Bot Help Commands.",
    usage: `${botconfig.prefix}help`,
    accessableby: "Members",
    aliases: ["h", "hlp"]
}
