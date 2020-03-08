module.exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.channel.send('Nothing music play for the moment');
    
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Tu n\'est pas connecté à un channel vocal');
    
    let userCount = message.member.voiceChannel.members.size;
    
    let required = Math.ceil(userCount/2);
    
    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
    
    if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`You already vote. ${fetched.queue[0].voteSkips.length}/${required} require for skip`);
    
    fetched.queue[0].voteSkips.push(message.member.id);
    
    ops.active.set(message.guild.id, fetched);
    
    if (fetched.queue[0].voteSkips.length >= required) {
      message.channel.send('Next music!');
      return fetched.dispatcher.emit('end');
    }
    
    message.channel.send(`You voted for skip.${fetched.queue[0].voteSkips.length}/${required} require for skip `)
}


module.exports.help = {
    name: "skip"
}