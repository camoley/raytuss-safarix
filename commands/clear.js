exports.run = (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES'))
  return message.reply(":warning: **Bunu kullanmaya yetkin yok!**");

if(isNaN(args[0])) {
  message.channel.send(":warning: **Lütfen 0-100 arası bir sayı girin!**");
  return;
}      

if(args[0] > 100) {
  message.channel.send(":warning: **Lütfen 0-100 arası bir sayı girin!**");
  return;
}

const fetched = message.channel.fetchMessages({ limit: args[0]});

fetched.then(fetched => {
  message.channel.bulkDelete(fetched)
    .then(function () {
      message.channel.send("Mesajlar silindi bro! **"  +  fetched.size + "** tane mesaj sildim :wink: !").then(msg => {
        setTimeout(m => { m.delete(); }, 2500, msg)
      })
    })
    .catch(function (err) {
      console.log(err);
      message.reply(":warning: **Bir hatadan dolayı mesajları silemedim!**");
    });
});

    message.delete();

}