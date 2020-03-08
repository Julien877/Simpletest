exports.run = (client, message, args, ops) => {
  
    let fetched = ops.active.get(message.guild.id);
    
    if (!fetched) return message.channel.send('No music is playing at the moment');
    
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You are not connected to a voice channel');
    
    if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('Please enter a number between 0 and 200');
    
    fetched.dispatcher.setVolume(args[0]/100);
    
    message.channel.send(`Volume set : ${args[0]}`)
    
    
    
    
  
  
  
  
  
  
  
  }
  module.exports.help = {
      name: 'volume'
  }