exports.run = async (client, message, args, ops) => {

    if(!message.member.hasPermission('ADMINISTRATOR'))
    return message.reply(":warning: **Bunu kullanmaya yetkin yok!**");

        message.channel.send(
            args.slice().join(" ")
        );

            message.delete();
}