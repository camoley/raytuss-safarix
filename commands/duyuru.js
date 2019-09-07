const Discord = require('discord.js')

exports.run = async (client, message, args, ops, tools) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':warning: **Bu komutu kullanmak için yetkin yok!**');

    if(!args[0]) return message.channel.send(`:warning: **Kullanım:** ${ops.prefix}duyuru [cümle]`)

    const embed = new Discord.RichEmbed()
        .setColor('0xffffff')
        .setDescription(args.join(' '))
        .setTitle(`**${message.author.username}** tarafından duyuru oluşturuldu!`)

        let msg = await message.channel.send(embed);
    
     message.delete({timeout: 1000});
}