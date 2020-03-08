exports.run = async (client, message, args) => {

const channel = message.mentions.channels.first() || message.channel;

let snipedMessage = client.snipes.get(channel.id);
if (!snipedMessage) return message.channel.send(`There are no recent messages that were deleted inside ${channel}`); // This will send the channel's tag, not the object.

// We do not want to ping the user lol.
message.channel.send(`Snipped a message inside ${channel}, which was sent by **${snipedMessage.sender.tag}**\n${snipedMessage.content}`);
}
module.exports.help = {
    name: "snipe"
}