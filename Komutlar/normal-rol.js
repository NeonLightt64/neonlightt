const Discord = require('discord.js');
const Jimp = require('jimp');
const db = require('quick.db'),
 ms = require('parse-ms');

exports.run = async (bot, message, args) => {
  
   if(message.guild.id !== '719164248647008296') return message.channel.send('Bu komut sadece `DESTEK` sunucumda çalışmaktadır')
 
     {
    
    if(message.member.roles.has('785494362788200488') === true) return message.channel.send(`Zaten \`Normal\` rolünü aldın`)

 
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('``Normal`` rolün başarıyla verildi')
.setTimestamp()
  message.channel.send(embed)
  message.member.addRole('785494362788200488')

    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: 'genel'
};

exports.help = {
  name: 'normal',
  description: 'Rol almanızı sağlar',
  usage: 'normal'
};