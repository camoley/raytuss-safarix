exports.run = async (client, message, args, ops) => {
    
    if(!message.member.voiceChannel) return message.channel.send(':warning: **Bu komutu kullanmak için bir ses kanalında olmak zorundasın!**');
    
    if(!message.guild.me.voiceChannel) return message.channel.send(':warning: **Bu komutu kullanabilmen için bir ses kanalında olmak zorundayım!**');
    
    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(':warning: **Bu komutu kullanabilmek için aynı kanalda olmak zorundasın!**');
    
    //Leave Channel 
    message.guild.me.voiceChannel.leave();

    message.channel.send(':heavy_check_mark: **Ses kanalından başarıyla ayrıldım!**');
    
}