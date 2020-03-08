module.exports.run = (client, message, args) => {
    if (!args.join(' ')) { return message.channel.send('You have not specified a role name!'); }
    if (!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) { return message.channel.send('You do not have permission  `manage roles` !'); }
    if (!message.guild.member(client.user.id).hasPermission('MANAGE_ROLES')) { return message.channel.send('I don\'t have permission `manage roles` !'); }

    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));

    if (!role) { return message.channel.send('This role does not exist!'); }
    if (!member.roles.has(role.id)) { return message.channel.send('You don\'t have this role!'); }
    
        member.removeRole(role.id)
            .then(() => message.channel.send('You no longer have the role ' + role.toString()))
            .catch(console.error);
};

module.exports.help = {
    name: 'delrole'
};
