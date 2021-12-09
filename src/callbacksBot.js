module.exports = (bot) => {
    bot.command ({
        name: "<@",
        aliases: ["<!@"],
        nonPrefixed: true,
        code:`
      $if[$getGlobalUserVar[afk;$mentioned[1]]==activated]
      $reply[$messageID;😬・$username[$mentioned[1]] está no **modo AFK**. Deu uma saidinha...
      > Motivo: \`\`\`$getGlobalUserVar[motivoAfk;$mentioned[1]]\`\`\`{delete:7s};yes]
      $endif
        `
      })
      
      bot.command({
        name: "$alwaysExecute",
        nonPrefixed: true,
        code: `
      $setGlobalUserVar[afk;disabled;$authorID]
      $setGlobalUserVar[motivoAfk;não foi passado o motivo 😕;$authorID]
      $if[$getGlobalUserVar[afk;$authorID]==activated]
      $sendMessage[😉・Seu **modo AFK** foi desativado. Se precisar dar uma saindinha **:3** e ativar de novo peça pra mim usando \`$getServerVar[prefix]afk\`{delete:7s};no]
      $onlyIf[$checkContains[$message;$getServerVar[prefix]afk]==false;]
      $endif
        `
      })
}