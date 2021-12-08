module.exports = (bot) => {
    bot.status({
        text: "💡 Questões",
        status: "online",
        type: "STREAMING",
        url: "https://dsc.gg/devcenter/",
        time: 12
    })
    bot.status({
        text: "🤔 Respostas",
        status: "online",
        type: "WATCHING",
        time: 12
    })
}