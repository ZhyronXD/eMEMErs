const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("You Don't Have Permissions!");
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("This is not a number!");
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`Something Wrong NOOB!... ${err}`));
}

module.exports.config = {
    name: "clear",
    description: "clear Some Message form a Channel",
    usage: `${botconfig.prefix}clear <Number>`,
    accessableby: "Admins",
    aliases: []
}
