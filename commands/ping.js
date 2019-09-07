exports.run = (client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':warning: **Bu komutu kullanmak için yetkin yok!**');

    message.channel.send("Bakıyorum...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp  
        let choices = ["İşte Ping", "Hemen gösteriyorum", "Umarım Ping fazla değildir"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`${response}: Bot Gecikmesi: \`${ping}\`, API Gecikmesi: \`${Math.round(client.ping)}\``)
    })

}