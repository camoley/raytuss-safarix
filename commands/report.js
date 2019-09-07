const Discord = require("discord.js");

exports.run = async (client, message, args, ops) => {
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let reports = message.guild.channels.find('name', 'reports');

    if(!target) return message.channel.send(':warning: **Raporlamak için birisini belirtmelisin!**');
    if(!reason) return message.channel.send(':warning: **Sebepsiz kimseyi raporlayamazsın!**');
    if(!reports) return message.channel.send(':warning: **Raporları görmek için #reports kanalı bulunmalıdır!**');

    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .addField('Raporlanan Kullanıcı: ', `<@${target.user.id}>`)
        .addField('Raporlayan Kullanıcı: ', `<@${message.author.id}>`)
        .addField('Raporlanma Zamanı: ', message.createdAt)
        .addField('Raporlandığı Kanal: ', message.channel)
        .addField('Raporlanma Sebebi: ', reason)
        .setFooter('Raporlanan Kullanıcı Bilgileri', target.user.displayAvatarURL)


    let embed2 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(target.user.avatarURL)
    .addField('Raporlanan Kullanıcı: ', `<@${target.user.id}>`)
    .addField('Raporlayan Kullanıcı: ', `<@${message.author.id}>`)
    .addField('Raporlanma Sebebi: ', reason)    

    message.delete()    
    message.channel.send(embed2).then(msg => {
        setTimeout(m => { m.delete(); }, 5000, msg)
    })

    reports.send(embed);



}