const snekfetch = require('snekfetch');

exports.run = (client, msg, args) => {
  /*const voteRes = await snekfetch.get(`https://discordbots.org/bot/429500693741568020/check?userId=${msg.author.id}`)
                                .set('Authorization', client.config.dbotSites.DBLToken);
        var embed = await prepareEmbed(msg, 'mc başarım için https://discordbots.org/bot/429500693741568020 adresinden bota upvote vermelisiniz. (eğer upvote verdiyseniz 1 dakika beklemelisiniz)');
        if (!voteRes || !voteRes.body.voted) return message.edit({embed});*/
  let [title, contents] = args.join(" ").split("-");
  if(!contents) {
    [title, contents] = ["Basarim Kazanildi", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;
  if(args.join(" ").toLowerCase().includes("sword")) rnd = 34;
  if(title.length > 22 || contents.length > 22) return msg.edit("Maksimum uzunluk 22 karakter.").then(msg.delete.bind(msg), 2000);

  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;

  snekfetch.get(url)
   .then(r=>msg.channel.send("", {files:[{attachment: r.body}]}));
  msg.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mcödül'],
  permlevel: 0,
  kategori: 'eğlence'
};

exports.help = {
  name: 'mcbaşarı',
  description: 'Minecraft başarımı gönderir.',
  usage: 'mcbaşarı <yazı>'
};