const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.channel.send('You don\'t have permissions!'); }
    if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) { return message.channel.send('The bot is not allowed!'); }
    if (message.mentions.users.size === 0) { return message.channel.send('You must mention a user!'); }

        let kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) { return message.channel.send('I did not find the user!'); }
    
        message.mentions.users.first().send(`You are kick from the server **${message.guild.name}** par ${message.author.username}`)
            .then(() => {
                kickMember.kick()
                    .then((member) => {
                        message.channel.send(`${member.user.username} is kick ! By ${message.author.username}`);
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
                .catch((error) => {
                    if (error) { console.error(error); }
                        kickMember.kick()
                            .then((member) => {
                                message.channel.send(`${member.user.username} is kick ! by ${message.author.username}`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
};

module.exports.help = {
    name: 'kick'
};
