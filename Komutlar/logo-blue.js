const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bir Metin Gir**")
let link = "https://habbofont.net/font/palooza_blue/"+isim+".gif"
  const embed = new Discord.RichEmbed()
  .setColor(0xF001FA)
  .setTitle('Logo')
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bluelogo"],
  kategori: 'logo',
  permLevel: 0
};
exports.help = {
  name: 'blue',
  description: 'Mavi Logo Yaparsınız',
  usage: 'blue <yazı>'
};