const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
    
  const db = require('quick.db');
  

 
  
   const x = args.slice(0).join(' ');
  
    if (!x) return message.reply('Lütfen bir oylama mesajı giriniz');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`${client.user.username} - Oylama sistemi`)
        .addField('Oylama', x)
    let msg = await message.channel.send(embed)
        .then(function (msg) {
        
          msg.react("727045346852601908");
            msg.react("780444956849340416")           
        });
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4,
  kategori: "sunucu",

};

exports.help = {
  name: 'oylama',
  description: 'Sunucunuzda oylama yapmanızı sağlar.',
  usage: 'oylama <mesaj>',
 
};