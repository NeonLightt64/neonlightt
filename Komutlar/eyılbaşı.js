var Jimp = require('jimp');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
        //    image.greyscale()
           // image.gaussian(3)
            Jimp.read("https://i.hizliresim.com/QGHPr2.png", (err, avatar) => {
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
  aliases: ["noel"],
  permLevel: 0,
 kategori: "efekt"
};

exports.help = {
  name: 'eyılbaşı',
description: '⛄ Avatarınıza yılbaşı efekti ekler ⛄',
usage: 'eyılbaşı'
};
 