module.exports.run = async(client, message, args) => {

    const member = message.mentions.members.first();

    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('⚠️ You do not have permission !');
    
    if (!member)
        return message.channel.send('⚠️ You must mention a user');
    
    if (!args[0] || !args[1])
        return message.channel.send('⚠️ use : `add @user/id <nombre>` !');
    
    if (isNaN(parseInt(args[1]))) 
        return message.channel.send('⚠️ You must specify a number !');

    client.db.ensure(member.id, {
        invites: 0
    });

    client.db.math(member.id, '+', parseInt(args[1]), 'invites');

    message.channel.send({
        embed: {
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            description:  `🔺 ${args[1]} Purr(s) added by ${message.author.tag}\n📄 Currently ${client.db.get(member.id, 'invites')} Purr(s)`,
            color: 0x00FFFF
        }
    });
};

module.exports.help = {
    name: 'add'
};