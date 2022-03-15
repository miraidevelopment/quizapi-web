module.exports = ({
    name: "versão",
    description: "Mostrando minha atual versão",
    category: "Bot",
    perms: "Este comando não solicita permissões.",
    usage: "versao",
    aliases: ["versao", "version", "v", "--v", "-v"],
    code: `
$description[📑 » Versão
<:mt_ar:912044933626626088>╰ Minha versão atual é v$getVar[version]]
$color[$getVar[color]]
$onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Blacklist
<:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Cooldown
<:mt_ar:912044933626626088>╰ <@$authorID>, Vai com calma pequeno Einstein. Espere %time% para executar meus comandos!}{delete:15s}]
    `
  })