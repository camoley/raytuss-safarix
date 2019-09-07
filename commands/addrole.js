const Discord = require("discord.js");

exports.run = async (client, message, args, ops) => {

  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":warning: **Bunu kullanmaya yetkin yok!**");

    
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply(":warning: **Kullanıcı Bulunamadı!**");
    let role = args.slice(1).join(' ');
    if (!role) return message.reply(":warning: **Rol belirtmek zorundasın!**");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply(":warning: **Rol bulunamadı!**");

    if (rMember.roles.has(gRole.id)) return message.reply(":warning: **Kullanıcı bu role sahip!**");
    await (rMember.addRole(gRole.id));
    await message.channel.send(`:tada: **<@${rMember.id}> artık ${gRole.name} rolüne sahip!**`);
}
