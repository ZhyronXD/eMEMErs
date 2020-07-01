const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if (message.content.startsWith("hello")) {
       message.reply('Hi :wave:');
    }
}


module.exports.config = {
    name: "hi",
    description: "Simple Command",
    usage: "hi",
    accessableby: "Members",
    aliases: []
}