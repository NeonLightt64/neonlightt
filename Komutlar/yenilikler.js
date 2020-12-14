const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  

  let y = await client.emojis.get(client.emojiler.yan);
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

  var ac = client.emojis.get(client.emojiler.evet);
  var ka = client.emojis.get(client.emojiler.hayır);
const yenilik = client.ayarlar.yenilik;

  

  
  const ayarReis = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription("<:onay:746367770731741205> `Logo komutları eklendi.` \n <:onay:746367770731741205> `Yeni efekt komutları eklendi` \n <:onay:746367770731741205> `Tüm Hatalar düzeltildi`")
  .setTimestamp()
  message.channel.send(ayarReis)

  
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: "genel",
  };
  
  exports.help = {
    name: 'yenilikler',
    description: 'Bota eklenmiş olan yenilikleri gösterir.',
    usage: 'yenilikler',
  };
