const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    
{
      let args = message.content.split(' ').slice(1).join(" ");
    if (!args) return message.channel.send("Lütfen oynuyor `yazısını` ayarlayınız.")
client.user.setActivity(args);
message.channel.send('Durum '+args+' olarak değiştirildi.');
}


}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
   permLevel: 5,
    //kategori: "yapımcı"
};

module.exports.help = {
  name: 'oynuyor',
 // description: '.',
 // usage: ''
};