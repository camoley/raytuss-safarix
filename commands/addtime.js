const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args, ops) => {

let serverowner = message.guild.owner
let time = args[0];    

    if(message.author.id !== ops.ownerID) return message.channel.send(":warning: **Bunu sadece camoley#4464 kullanabilir!**").then(msg => {
        setTimeout(m => { m.delete(); }, 5000, msg)
    })

    let embed = new Discord.RichEmbed()
    .setColor("GOLD")
    .setTitle("**Bir Sunucuya Zaman Eklendi**")
    .addField("Sunucu Adı", message.guild.name, true)
    .addField("Sunucu ID", message.guild.id, true)
    .addField("Sunucu Sahibi", message.guild.owner, true)
    .addField("Toplam Üye Sayısı", message.guild.memberCount, true)
    .addField("Eklenen süre", `${ms(ms(time))}`, true)
    .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

    let embed2 = new Discord.RichEmbed()
        .setColor("GOLD")
        .setTitle(message.guild.name + " isimli sunucunuza zaman eklendi!")
        .addField("Sunucu Adı", message.guild.name, true)
        .addField("Sunucu ID", message.guild.id, true)
        .addField("Eklenen süre", `${ms(ms(time))}`, true)
        
    if(!time) return message.reply(":warning: **Lütfen bir zaman belirt!**");
        await message.author.send(embed)
        await serverowner.send(embed2)
 
        message.delete();
 
        setTimeout(function(){

            serverowner.send(`:warning: **Kullanım Süresi Bitti Kapatılıyor...**`)

            console.log('--------------------------------------------------------------------------------');
            console.log(`               Süre Bitti Kapatılıyor... (${ms(ms(time))})`);
            console.log('--------------------------------------------------------------------------------');

            process.exit();

        }, ms(time));
       
}