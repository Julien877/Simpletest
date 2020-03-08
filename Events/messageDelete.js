const { MessageEmbed } = require('discord.js');

module.exports = (client, message) => {
    client.snipes.set(message.channel.id, {
        sender: message.author,
        content: message.content
    }); // The key is the channel.id
  }; // We are saving the senders object and content.