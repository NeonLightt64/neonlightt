var Jimp = require('jimp');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            image.greyscale()
            image.gaussian(3)
            Jimp.read("https://cdn.glitch.com/b18a2fa6-68cb-49d5-9818-64c50dd0fdab%2F1.png?1529363616039", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 4, 0).write(`./x/${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./x/${user.id}.png`));
                 // message.react('617413726768988160')
                }, 1000);
          message.channel.stopTyping();
            });
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "efekt"
};

exports.help = {
  name: 'wasted',
  description: 'Avatarınıza Wasted efekti verir.',
  usage: 'wasted veya wasted <@kullanıcı>'
};