const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bir Metin Gir**")
let link = "https://habbofont.net/font/bubble_orange/"+isim+".gif"
  const embed = new Discord.RichEmbed()
  .setColor(0xF001FA)
  .setImage(link)
  .setTitle('Logo')
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bubble2"],
  kategori: 'logo',
  permLevel: 0
};
exports.help = {
  name: 'bubble2',
  description: 'Sakız 2 Logo Yaparsınız',
  usage: 'bubble2 <yazı>'
};