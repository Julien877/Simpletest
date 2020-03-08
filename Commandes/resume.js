exports.run = (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    
    if (!fetched) return message.channel.send('No music is playing at the moment');
    
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Tu n\'est pas connecté à un channel vocal');
    
    if (!fetched.dispatcher.paused) return message.channel.send('music is not paused');
    
    fetched.dispatcher.resume();
    
    message.channel.send(`Music : ${fetched.queue[0].songTitle}`);
  
  
  
  
  }
  
module.exports.help = {
  name: 'resume'
}