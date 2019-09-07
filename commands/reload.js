exports.run = (client, message, args, ops) => {

    if(message.author.id !== ops.ownerID) return message.channel.send(':warning: **Sadece bot sahibi bu komutu kullanabilir!**');

    if(!args[0]) {
        message.channel.send(":warning: **Lütfen yeniden yüklenmesi için bir komut dosyası seçiniz!**");
        return;
    }

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
        return message.channel.send(`:warning: **${args[0]}** yeniden yüklenmek için uygun değil!`);

    }

    message.channel.send(`**${args[0]}** yeniden yüklendi!`);

}