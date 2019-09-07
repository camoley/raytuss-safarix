const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args, ops) => {
    if(!message.member.hasPermission('MANAGE_ROLES'))
    return message.reply(":warning: **Bunu kullanmaya yetkin yok!**");

let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send(":warning: **Kullanıcı bulunamadı!**");
    if(tomute.hasPermission('MANAGE_ROLES')) return message.channel.send(':warning: **Bu kullanıcıyı susturamazsın!**');
    let muterole = message.guild.roles.find('name', 'Muted');
    if(!muterole) {
        try{
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async(channel, id) => {
                await channel.owerwritepermission(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }

let mutetime = args[1];
    if(!mutetime) return message.channel.send(":warning: **Lütfen bir zaman belirtin!**");

    await (tomute.addRole(muterole.id));
    
    let embed = new Discord.RichEmbed()
        //.setTimestamp()
        .setColor('#ff0000')
        .addField('Susturulan Kişi', `<@${tomute.id}>`)
        .addField('Susturan', `<@${message.author.id}>`)
        .addField('Susturulma Süresi', `${ms(ms(mutetime))}`)
        .setFooter(message.createdAt)
    
    message.delete()
    message.channel.send(embed)

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        let embed2 = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setDescription(`**<@${tomute.id}> artık susturulmuyor!**`)
        message.channel.send(embed2)
    }, ms(mutetime));
    
};