const Discord = require('discord.js');
const prefix = '*';
const ffmpeg = require('ffmpeg');

const active = new Map();

        let ops = {
            active: active
          }

module.exports = (client, message,) => {
    if (message.author.bot || message.channel.type === 'dm') { return; }
    if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) { return; }
    if (!message.content.startsWith(prefix)) { return; }

        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let commande = args.shift();
        let cmd = client.commands.get(commande);

        if (!cmd) { return; }
        console.log(ops)
            cmd.run(client, message, args, ops);
            
};
