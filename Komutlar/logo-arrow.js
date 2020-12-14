const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://dynamic.brandcrowd.com/asset/logo/1a2ebc7a-1b24-466a-bee7-9a0e8f5d8395/logo?v=4&text="+isim
  const embed = new Discord.RichEmbed()
  .setTitle('Logo')
  .setColor(0xF001FA)
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["arrow", "arrowlogo"],
  kategori: 'logo',
  permLevel: 0
};
exports.help = {
  name: 'arrow',
  description: 'Ok Logo Yaparsınız',
  usage: 'arrow <yazı>'
};