const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args,) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':warning: **Bunu kullanmaya yetkin yok!**');
    if(!args[0]) return message.channel.send(`:warning: **setprefix [yeni prefix]**`);

    let prefixes = JSON.parse(fs.readFileSync('Storage/prefixes.json', 'utf8'));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile('Storage/prefixes.json', JSON.stringify(prefixes), (err) => {
        if(err) console.log(err)
    });

    let embed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor('#FF9900')
        .setThumbnail(message.guild.iconURL)
        .setTitle(':white_check_mark: **Prefix değiştirildi!**')
        .setDescription(`Prefix **${args[0]}** ile değiştirildi!`);

    message.channel.send(embed);
}