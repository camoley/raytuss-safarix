exports.run = async(client, message, args, ops) => {
    
    let fetched = ops.active.get(message.guild.id);
    if(!fetched) return message.channel.send(':warning: **Şu anda müzik çalmıyor!**');

    //Veriables
    let queue = fetched.queue;
    let nowPlaying = queue[0];
    let resp = `__**Şu anda çalınan**__\n**${nowPlaying.songTitle}** -- **Ekleyen:** **${nowPlaying.requester}**\n\n__**Sıradaki**__\n`;
    for (var i = 1; i < queue.length; i++) {
        resp += `${i}. **${queue[i].songTitle}** -- **Ekleyen:** **${queue[i].requester}**\n`;
    }

    message.channel.send(resp);
}