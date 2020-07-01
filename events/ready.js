const Discord = require("discord.js")
const botconfig = require('../config.json');
const creator = require('../creator.json');
module.exports = bot => { 
    console.log(`${bot.user.username} is online Now!`)
        bot.user.setActivity(`[ ${botconfig.prefix}help ]`, {type: "LISTENING"});//You Can Change To (LISTENING) Or Something else..
}
