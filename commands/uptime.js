exports.run = async (client, message, args, ops) => {
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 *60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 *24)) % 24).toString()
        return `${days.padStart(1,'0')} gün, ${hrs.padStart(2,'0')} saat, ${min.padStart(2,'0')} dakika , ${sec.padStart(2,'0')} saniye`
    }

    message.channel.send(`:warning:  \`${duration(client.uptime)}\` **_'dir çalışıyorum!_**`)

        message.delete();
}
