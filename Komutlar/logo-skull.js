const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("Lütfen Bir Metin Gir")
let link = "https://bcassetcdn.com/asset/logo/10cd8160-2b8d-41c5-87cc-f683a853d5d9/logo?v=4&text="+isim
  const embed = new Discord.RichEmbed()
  .setImage(link)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["skull-logo", "skulllogo"],
  kategori: 'logo',
  permLevel: 0
};

exports.help = {
  name: 'skull',
  description: 'Kafa Logo Yaparsınız',
  usage: 'skull <yazı>'
};