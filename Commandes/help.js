const Discord = require("discord.js")
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {

    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RichEmbed()
            .setColor(colours.cyan)
            .setAuthor(`PurrBoy CT Gaming`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setAuthor(`Help Command!`, message.guild.iconURL)
        .setColor(colours.redlight)
        .setDescription(`${message.author.username} check your dms!`)

        let Sembed = new Discord.RichEmbed()
        .setColor(colours.cyan)
        .setAuthor(`PurrBoy`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`These are the avaliable commands for the PurrBoy!!\nThe bot prefix is: * \nIf you have, or if you find any problem with any of these commands, contact Sauron PaRaDiSe Or Cat_1 directly`)
        .addField(`Commands:`, "```css\n🤪Members commands :\``` ``cat`` , ``avatar`` , ``dog`` , ``meme`` , ``help`` , ``slots`` , ``rps (soon..)`` , ``report(abuse = warn)``  , ``uptime``, ``serverinfo`` , ``userinfo`` , ``botinfo`` , ``ping`` ```css\n🎶 Music commands :\n``` ``play`` , ``skip(Soon usable..)`` , ``leave`` , ``pause(Soon usable..)`` , ``resume(Soon usable)`` , ``volume``, ``queue(Soon usable..)`` , ``playlist(Soon usable..)`` ```diff\n-👮Moderator Commands :\n```   ``addrole `` , ``removerole`` ,  , ``ban`` , ``unmute`` , ``mute`` , ``softban`` , ``snipe`` , ``say`` ```ini\n[👑OWNER COMMANDS👑]\n``` ``toppurr (soon..)`` , ``add(purr(s))`` , ``del(purr(s))`` , ``eval(soon..)`` ")
        .setFooter("PurrBoy Cat Tower Gaming", bot.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(1000000));
        message.author.send(Sembed)
    }
}


module.exports.help = {
    name: "help",
    aliases: ["h", "halp", "commands"],
    usage: "!usage",
    description: "",
    accessableby: "Members"
}