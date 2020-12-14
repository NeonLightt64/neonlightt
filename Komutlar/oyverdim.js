const discord = require("discord.js"); 
const client = new discord.Client();

const DBL = require("dblapi.js");
const neonlightt = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczMDc5MDc5OTI4OTA5MDE3OSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA3NzkyNDQwfQ.bmHfDnXeQkAFh8bWgbzJKNgon381xgGIx_Qt41KaNpg', client);

/*

https://top.gg/api/docs#mybots Sitesinden DBL Tokeninizi alabilirsiniz.

*/

exports.run = (client, message) => {
    neonlightt.hasVoted(message.author.id).then(voted => { 
        if (!voted) {
            message.channel.send( new discord.RichEmbed()
.setTitle("Hata")
.setColor("RED")
.setDescription("Destekçi rolü alabilmek için öncelikle oy vermen gerekiyor!")
.addField("Oy Vermek için:", `[Buraya Tıkla!](https://top.gg/bot/${client.user.id}/vote)`)
.setFooter(client.user.username)
)

        } else {
  message.channel.send( new discord.RichEmbed()
.setTitle("Başarılı!")
.setDescription("Destekçi rolünü başarılı bir şekilde verildi!")
.setColor("GREEN")
)
            message.member.addRole("785574138000965702")    //Vericek rol id.
        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oyverdim"],
  permLevel: 0,
  kategori: 'genel'
   
};

exports.help = {
  name: 'oy-verdim',
 description: 'Bota oy verirseniz özel rol alırsınız',
 usage: 'oyverdim'
};
