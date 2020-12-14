const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bir Metin Gir**")
let link = "https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text="+isim
  const embed = new Discord.RichEmbed()
  .setColor(0xF001FA)
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["green", "greenlogo"],
  kategori: 'logo',
  permLevel: 0
};
exports.help = {
  name: 'green',
  description: 'Yeşil Logo Yaparsınız',
  usage: 'green <yazı>'
};