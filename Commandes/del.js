module.exports.run = async(client, message, args) => {

    const member = message.mentions.members.first();

    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(':warning: You do not have permission !');
    
    if (!member)
        return message.channel.send(':warning: You must mention a user !');
    
    if (!args[0] || !args[1])
        return message.channel.send(':warning: Use : `del @user/id <nombre>` !');

    if (isNaN(parseInt(args[1]))) 
        return message.channel.send(':warning: You must specify a number !');

    client.db.ensure(member.id, {
        invites: 0
    });

    if (parseInt(args[1]) > client.db.get(member.id, 'invites')) {
        const number = client.db.get(member.id, 'invites');
        client.db.math(member.id, '-', client.db.get(member.id, 'invites'), 'invites');
        return message.channel.send({
            embed: {
                author: {
                    name: member.user.tag,
                    icon_url: member.user.displayAvatarURL
                },
                description:  `🔺 ${number} Purr(s) deleted by ${message.author.tag}\n📄 Currently ${client.db.get(member.id, 'invites')} Purr(s)`,
                color: 0x00FFFF
            }
        });
    };

    client.db.math(member.id, '-', parseInt(args[1]), 'invites');

    message.channel.send({
        embed: {
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            description:  `🔺 ${args[1]} Purr(s) deleted by ${message.author.tag}\n📄 Currently ${client.db.get(member.id, 'invites')} Purr(s)`,
            color: 0x00FFFF
        }
    });
};

module.exports.help = {
    name: 'del'
};