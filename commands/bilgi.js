const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    message.channel.send(
        new Discord.RichEmbed()
            .addField("Bot Sahibi", `<@278590588390211595>`, true)
            .addField("Toplam Sunucu Sayısı", client.guilds.size, true)
            .addField("Toplam Kullanıcı Sayısı", client.users.size, true)
            .addField("Toplam Kanal Sayısı", client.channels.size, true)
            .setColor("GOLD")
      );
}