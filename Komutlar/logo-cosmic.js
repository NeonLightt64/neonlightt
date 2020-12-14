const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bir Kelime Yaz**")
let link = "https://dynamic.brandcrowd.com/asset/logo/a88088f5-1782-4ebe-b8cb-e69645c2c873/logo?v=4&text="+isim
  const embed = new Discord.RichEmbed()
  .setColor(0xF001FA)
  .setImage(link)
  .setTitle('logo')
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["comic", "comiclogo"],
  kategori: 'logo',
  permLevel: 0
};
exports.help = {
  name: 'comic',
  description: 'Kosmik Logo Yaparsınız',
  usage: 'comic <metin>'
};