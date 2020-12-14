const Discord = require('discord.js');
/*var goldd = require('goldd');
var db = require('quick.db');*/
exports.run = (client, message, args) => {
  
 /* let text = args.join(" ");

if (db.has(`üyelikk_${msg.author.id}`)) {
  message.channel.send("```" + gold.goldd({
        text : text
    }) + "```")
 } else
  message.channel.send('<:hata:746320500359430184> Bu komut gold üyelere özel.')
*/
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bir Metin Gir**")
let link = "https://habbofont.net/font/palooza/"+isim+".gif"
  const embed = new Discord.RichEmbed()
  .setColor(0xF001FA)
  .setImage(link)
  .setTitle('Logo')
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold"],
  kategori: 'logo',
  permLevel: 0
};
exports.help = {
  name: 'gold',
  description: 'Altın Logo Yaparsınız',
  usage: 'gold <yazı>'
};