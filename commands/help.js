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
        .setDescription(`**‣ ${botconfig.prefix}help <command>** For Advance Help\n‣ Prefix: ${botconfig.prefix}`)
        .setColor('RANDOM')
         .addFields(
            {name: `${emoji.discload} ‣ **Information**`, value: '**‣**`botinfo`\n**‣**`botinvite`'},
            {name: `${emoji.rainbowfrog} ‣ **Fun**`, value: '**‣** `meme`\n**‣**`8ball`\n**‣**`howgay`\n**‣**`lucky`\n**‣**`lesbian`\n**‣**`gender`\n**‣**`say`\n**‣**`nsfw`'}
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
