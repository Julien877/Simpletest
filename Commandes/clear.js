const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) { return message.channel.send('You don\'t have permissions!'); }
    if (!args[0]) { return message.channel.send('You must specify a number of messages to delete!'); }
    else if (isNaN(args[0])) { return message.channel.send('Please specify a number!'); }
                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(`**${messages.size}** messages have been deleted!`);
            });
};

module.exports.help = {
    name: 'clear'
};
