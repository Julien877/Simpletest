const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("```Thank to Sauron for code me :D , Im Purrboy the bot who count your purr(s) , i have other cool command , type : *help for see :D ```")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}