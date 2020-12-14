const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
  let kod = await db.fetch(`premium.${message.guild.id}`)
  if(kod) {
    
} else { return message.channel.send(`${message.author}, Malesef Premium Süreniz Bitmiştir. Detaylı Bilgi İçin /premium`) }
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send('Yeterli Yetkiye Sahip Değilsin! '+client.emojis.get('647760202875142154'))
  if (db.has(`premium_${message.guild.id}`) == false) {
//message.channel.send(`<@${message.author.id}> Maalesef Premium Süresi Bitmiştir. Hizmetimizden Memnun Olduysanız Tekrar Alabilirsiniz \`!premium\``)
  } else {
  
   if(!args[0] || isNaN(args[0])) return message.channel.send(`Ayarlamam İçin Bir Sayı Yazmalısın`);
  await db.set(`rlimit31_${message.guild.id}`, args[0])
  message.reply(`Rol Hassasiyeti **${args[0]}** Rakamına Ayarlanmıştır. Bu Rakamı Kimseyle Paylaşmayın`);
message.delete(3000) 
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
 // kategori: ''
};

exports.help = {
  name: 'koruma-rollimit',
  description: 'Rol Koruma Limiti Ayarlar.',
  usage: 'rollimit',
  //kategori: 'yetkili'
};