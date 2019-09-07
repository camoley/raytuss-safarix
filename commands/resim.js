const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    let member = message.guild.member(message.mentions.users.first() || message.author || message.guild.members.get(args[0])); 
    let embed = new Discord.RichEmbed()
        .setAuthor(`${member.user.username}`)
        .setImage(member.user.avatarURL)

    message.channel.send(embed);
}