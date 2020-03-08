module.exports.run = async(client, message, args) => {

    const member = message.mentions.members.first();

    if (!message.member.hasPermission('SEND_MESSAGES'))
        return message.channel.send('⚠️ You do not have permission !');
    
    if (!member)
        return message.channel.send('⚠️ You must mention a user !');

    client.db.ensure(member.id, {
        invites: 0
    });

    message.channel.send({
        embed: {
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            description:  `📄 ${client.db.get(member.id, 'invites')} Purr(s)`,
            color: 0x00FFFF
        }
    });
};

module.exports.help = {
    name: 'purr'
};