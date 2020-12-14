const Discord = require('discord.js');

exports.run = async (client, message, args,) => {
//  const useruser = "Komut "  + message.author.username + " tarafından çalıştırıldı";
 // const userurl = message.author.avatarURL;
 // const bayrak = ":flag_tr:";
  //const ping = `${Math.round(client.ping)}ms`;

let embed = new Discord.RichEmbed()
.setTitle('Language')
//.setColor("#00FF00")
//.addField("Ping :", ping)
//.addField("Lokasyon :", bayrak)
//.setFooter(useruser, userurl)
.setColor('#0099ff')
.setDescription('Available Languages **TR , EN** \nTo change /set-lang <lang>')
//.setTimestamp();

message.channel.send(embed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: 'sunucu'
};

exports.help = {
  name: 'lang',
  description: 'Changes the bots language.',
  usage: 'lang <lang>'
};