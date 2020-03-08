exports.run = async (client, message, args, ops) => {
    if (!message.member.voiceChannel) return message.channel.send('Plz connect to voice channel');

    if (!message.guild.me.voiceChannel) return message.channel.send('Sorry, The bot is not connected to voice channel ');
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Sorry, You are not connected to voice channel');

    message.guild.me.voiceChannel.leave();



}
module.exports.help = {
    name: 'leave'
}