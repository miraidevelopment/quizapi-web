module.exports = ({
    name: "afk",
    description: "Para indicar se você esteja AFK...",
    category: "Utilidades",
    perms: "Este comando não solicita permissões.",
    usage: "afk (motivo)",
    code: `
  $if[$message==]
  $reply[$messageID;💤・Seu **modo AFK** foi ativado. Para você não se incomodar, pode relaxar, assim que você enviar uma mensagem no chat será desativado **:3**;no]
  $elseif[$message!=]
  $setGlobalUserVar[motivoAfk;$replaceText[$replaceText[$replaceText[$message;@everyone;everyone];@here;here];\`;'];$authorID]
  $reply[$messageID;💤・Seu **modo AFK** foi ativado. Para você não se incomodar, pode relaxar, assim que você enviar uma mensagem no chat será desativado **:3**
> Motivo: \`\`\`$replaceText[$replaceText[$replaceText[$message;@everyone;everyone];@here;here];\`;']\`\`\`;no]
  $endelseif
  $endif
  $setGlobalUserVar[afk;activated;$authorID]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Blacklist
  <:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
  $cooldown[5s;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Cooldown
  <:mt_ar:912044933626626088>╰ <@$authorID>, Vai com calma pequeno Einstein. Espere %time% para executar meus comandos!}{delete:15s}]
    `
  })