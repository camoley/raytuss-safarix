const Discord = require('discord.js')

exports.run = async (client, message, args, ops, tools) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':warning: **Bu komutu kullanmak için **YETKİLİ** olmalısın!**');
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':warning: **Bu komutu kullanmak için yetkin yok!**');

    if(!args[0]) return message.channel.send(`**Kullanım:** ${ops.prefix}poll [cümle]`)

    const embed = new Discord.RichEmbed()
        .setColor('0xffffff')
        .setFooter('Oyunu kullan!')
        .setDescription(args.join(' '))
        .setTitle(`**${message.author.username}** tarafından anket oluşturuldu!`)

        let msg = await message.channel.send(embed);

        await msg.react("👍");
        await msg.react("👎");  
   
     message.delete({timeout: 1000});
}