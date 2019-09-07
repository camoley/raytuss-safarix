const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    message.channel.send(
        new Discord.RichEmbed()
            .addField("Sunucu Adı", message.guild.name, true)
            .addField("Sunucu ID", message.guild.id, true)
            .addField("Sunucu Sahibi", message.guild.owner, true)
            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)
            .addField("AFK Süresi", message.guild.afkTimeout, true)
            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)
            .setColor("GOLD")
      );
}