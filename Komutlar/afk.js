const db = require("quick.db")
const Discord = require('discord.js');

exports.run = function(client, message, args) {
//const snekfetch = require("snekfetch");
     var s = 'tr'
  var a = client.commands.get('afk').help.name
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var a = client.commands.get('afk').help.enname
    }
    const dil = client[s]
    const o = a
 
 {
  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  if(!REASON) return message.channel.send(`${client.emojis.get(client.emojiler.hayır)} ${dil.afk.hata}`).then(message => message.delete(7000));
  
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  message.channel.send(`${client.emojis.get(client.emojiler.evet)} ${dil.afk.giris}`).then(message => message.delete(7000));  
};}
  
 exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  kategori: 'kullanıcı',
  permLevel: 0 
};

exports.help = {
  name: 'afk', 
  description: 'Afk moduna girmenizi sağlar.',
  usage: 'afk <sebep>'
};