const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    if(!message.member.hasPermission('BAN_MEMBERS'))
    return message.reply(":warning: **Bunu kullanmaya yetkin yok!**");

  let member = message.mentions.members.first();
  if(!member)
    return message.reply(":warning: **Lütfen bu sunucu için geçerli bir üye belirtin!**");
  if(!member.bannable)
    return message.reply(":warning: **Bu kullanıcıyı yasaklayamam!**");

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "Hiçbir neden belirtilmedi!";


  member.ban(reason)
    .then(function () {
      let embed = new Discord.RichEmbed()
      //.setTimestamp()
      .setColor('#ff0000')
      .addField('Yasaklanan Kişi', `<@${member.user.id}>`)
      .addField('Yasaklayan Kişi', `<@${message.author.id}>`)
      .addField('Sebep', `${reason}`)
      .setFooter(message.createdAt)
  
  message.delete()
  message.channel.send(embed)
    })
    .catch(function (err) {
      console.log(err);
      message.reply(":warning: **Bir hatadan dolayı bu kullanıcıyı yasaklayamadım!**")
    })
}