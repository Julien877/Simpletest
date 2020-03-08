const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('You do not have permission!'); }
    if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('The bot is not allowed!'); }
    if (message.mentions.users.size === 0) { return message.channel.send('You must mention a user!'); }

        let banMember = message.guild.member(message.mentions.users.first());
        if (!banMember) { return message.channel.send('I did not find the user!'); }
    
        message.mentions.users.first().send(`You are banned from the server **${message.guild.name}** by ${message.author.username}`)
            .then(() => {
                banMember.ban()
                    .then((member) => {
                        message.channel.send(`${member.user.username} is banned! By ${message.author.username}`);
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
                .catch((error) => {
                    if (error) { console.error(error); }
                        banMember.ban()
                            .then((member) => {
                                message.channel.send(`${member.user.username} is ban! By ${message.author.username}`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
};

module.exports.help = {
    name: 'ban'
};
