exports.run = (client, message, args, ops) => {
    
    message.reply("Zarı Atıyorum...").then(m => {
    
    let numbers = ["1", "2", "3", "4", "5", "6"]
    let response = numbers[Math.floor(Math.random() * numbers.length)]
    let response2 = numbers[Math.floor(Math.random() * numbers.length)]

    m.edit(`<@${message.author.id}> \`${response}\`, \`${response2}\` geldi!`)
    
});

}
