const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bir Metin Gir**")
let link = "https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=booking-logo&text="+isim
  const embed = new Discord.RichEmbed()
  .setColor(0xF001FA)
  .setTitle('Logo')
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["booking", "bookinglogo"],
  kategori: 'logo',
  permLevel: 0
};
exports.help = {
  name: 'booking',
  description: 'Kitaplık Logo Yaparsınız',
  usage: 'booking <yazı>'
};