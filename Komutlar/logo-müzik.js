const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("Lütfen Bir Metin Gir")
let link = "https://bcassetcdn.com/asset/logo/545fa973-da1e-428a-bf78-f9f8b0717cdb/logo?v=4&text="+isim
  const embed = new Discord.RichEmbed()
  .setImage(link)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'logo',
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Müzik Logo Yaparsınız',
  usage: 'logo <yazı>'
};