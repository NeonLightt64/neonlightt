const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
if(message.author.id !== "727372765782343701") return message.channel.send('')
  
  if(args[0] === "kapalı") {
let veri = await db.fetch(`botbakım`)
if(!veri) return message.channel.send('Anlaşılan bot zaten bakımda değil. :x:')
message.channel.send('Bot bakım modundan çıkarıldı.!')
db.delete(`botbakım`)    
  return
}
 
    
if(args[0] === "açık") {

  
  let nani = args.slice(1).join(' ');
  let peep; 
  peep = 'NeonLight'
  if(!nani) return message.channel.send(':x: Bir bakım sebebi girmelisin.')

  let brawl = new Discord.RichEmbed()
  .setTitle('Bot Bakıma Alındı!')
  .setDescription('Şu andan itibaren botu bakıma aldınız.Sizin dışında hiçbir kullanıcı siz bakımı kapayana kadar hiçbir bot komutunu kullanamayacak. \n\n **kapamak için:** /bakım kapat \n\n Botu kullanmaya çalışan kişilere `'+nani+'` sebebi ile bakımda olduğumu belirteceğim.')
  .setColor('RED')
  .setFooter(peep + ' Bot Bakım Sistemi')
message.channel.send(brawl)
  message.delete()
  db.set(`botbakım`, nani)
 return
}
message.reply('Bir değer belirtmelisin \n\n `açık` / `kapalı`')
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
 // kategori: 'yapımcı',
  permLevel: 5
};

exports.help = {
  name: 'bakım',
//  description: 'taslak', 
//  usage: 'bakım'
};