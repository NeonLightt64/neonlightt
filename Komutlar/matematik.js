const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents



exports.run = function(client, message, args) {
    var soru = args.join(' ');

    if(!soru) return message.reply(''+client.emojis.get(client.emojiler.kapalii)+' Lütfen bir işlem yazın. Örnek: ``/matematik 24+12``')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
           if (message.channel.send(''+client.emojis.get(client.emojiler.kapalii)+' Hatalı işlem: ' + 'Lütfen çarpma işlemi yaparken \`x\` yerine \` * \` kullanın.')){
             
           } else return
        } 

        message.reply(`\nİşlem : \`${soru}\`\nCevap: \`${cevap}\``)
          
         }


};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
    kategori: 'genel',
  permLevel: 0 
};

exports.help = {
  name: 'hesapla', 
  description: 'Belirtilen işlemi yapar.',
  usage: '/hesapla <işlem>'
};
