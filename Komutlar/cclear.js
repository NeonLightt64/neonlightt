const Discord = require('discord.js');
exports.run = function(client, message, args) {

if(!args[0]) return message.channel.send('');
message.channel.bulkDelete(args[0]).then(() => {
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'cclear',
  //description: '',
 // usage: ''
};