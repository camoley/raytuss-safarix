exports.run = async (client, message, args, ops) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':warning: **Bunu kullanmaya yetkin yok!**');

    try {
        await message.channel.send(":warning: **Kapatılıyor...**");
   
        console.log('--------------------------------------------------------------------------------');
        console.log("                                 Kapatılıyor...");
        console.log('--------------------------------------------------------------------------------');

       process.exit();
            
    } catch(e) {
        message.channel.send(`Hata : ${e.message}`);
    }


}
