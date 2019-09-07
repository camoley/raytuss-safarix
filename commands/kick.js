const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
    return message.reply(":warning: **Bunu kullanmaya yetkin yok!**");


  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
    return message.reply(":warning: **Lütfen bu sunucu için geçerli bir üye belirtin!**");
  if(!member.kickable)
    return message.reply(":warnin: **Bu kullanıcıyı atamam!**");

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "Hiçbir neden belirtilmedi!";

  member.kick(reason)
    .then(function () {
      let embed = new Discord.RichEmbed()
      //.setTimestamp()
      .setColor('#ff0000')
      .addField('Atılan Kişi', `<@${member.user.id}>`)
      .addField('Atan Kişi', `<@${message.author.id}>`)
      .addField('Sebep', `${reason}`)
      .setFooter(message.createdAt)
  
  message.delete()
  message.channel.send(embed)
    })
    .catch(function (err) {
      console.log(err);
      msg.reply(":warning: **Bir hatadan dolayı bu kullanıcıyı atamadım!**")
    });
}