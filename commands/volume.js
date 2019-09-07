exports.run = async (client, message, args, ops) => {
    
    let fetched = ops.active.get(message.guild.id);
    
    if(!fetched) return message.channel.send(':warning: **Şu anda müzik çalmıyor!**');
    
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(':warning: **Bu komutu kullanabilmek için aynı kanalda olmak zorundasın!**');


    if(isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send(':warning: **Lütfen 0-200 arasında bir sayı giriniz!**');
    
    fetched.dispatcher.setVolume(args[0]/100);
        message.channel.send(`:loud_sound: **${fetched.queue[0].songTitle}** adlı şarkının sesi **${args[0]}** olarak ayarlandı!`);

}