exports.run = async (client, message, args, ops) => {
    
    let fetched = ops.active.get(message.guild.id);
    
    if(!fetched) return message.channel.send(':warning: **Şu anda müzik çalmıyor!**');
    
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(':warning: **Bu komutu kullanabilmek için aynı kanalda olmak zorundasın!**');
    
    if (fetched.dispatcher.paused) return message.channel.send(':warning: **Müzik zaten durdurulmuş!**');
    
    fetched.dispatcher.pause();
    
    message.channel.send(`:pause_button: **${fetched.queue[0].songTitle}** durduruldu!`);
}