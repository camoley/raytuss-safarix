exports.run = async (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);
    if(!fetched) return message.channel.send(':warning: **Şu anda müzik çalmıyor!**');
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(':warning: **Bu komutu kullanabilmek için aynı kanalda olmak zorundasın!**');

    let required = (1);
    if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

    if(fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`:warning: **Zaten oy verdin! ${fetched.queue[0].voteSkips.length}/${required} oy var!**`);

    fetched.queue[0].voteSkips.push(message.member.id);

    ops.active.set(message.guild.id, fetched);

    if(fetched.queue[0].voteSkips.length >= required) {
        message.channel.send(':heavy_check_mark: **Şarkıyı geçtim!**');
        
        return fetched.dispatcher.emit('end');
    }
}