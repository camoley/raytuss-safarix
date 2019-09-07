const Discord = require("discord.js");

exports.run = async (client, message, args, ops) => {

    if(!message.member.hasPermission('ADMINISTRATOR'))
    return message.reply(":warning: **Bunu kullanmaya yetkin yok!**");

    let dmUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dmUser) return message.channel.send(":warning: **DM göndermek için birisini belirtmelisin!**")
    let dmMessage = args.slice(1).join(' ');
    if(!dmMessage) return message.channel.send(":warning: **Bir mesaj göndermek zorundasın!**")

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("**DM mesajın gönderildi!**")
    .addField('İletilen Kişi: ', `<@${dmUser.user.id}>`)
    //.addField('Mesajı Gönderen: ', `<@${message.author.id}>`)
    .addField('Mesaj: ', dmMessage)    
    
    let embed2 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("**Yeni DM mesajı!**")
    .addField('Mesajı Gönderen: ', `<@${message.author.id}>`)
    .addField('Mesaj: ', dmMessage)
    
    
    dmUser.send(embed2);

    message.author.send(embed);

        message.delete();

}