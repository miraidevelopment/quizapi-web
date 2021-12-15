module.exports = ({
    name: "<@917962601923760139>",
    description: "Resposta a menção",
    category: "Bot",
    perms: "Este comando solicita a permissão para eu adicionar reações.",
    aliases: ["<@!917962601923760139>"],
    nonPrefixed: true,
    code: `
$addCmdReactions[💡]
$thumbnail[$userAvatar[$clientID]]
$description[\💡 » Olá! Vi que me marcou. 
<:mt_ar:912044933626626088>╰ Meu nome é Quiz Api BOT, um bot feito para auxiliar em minha API de uso público. Meu prefixo neste servidor é \`[ $getServerVar[prefix] ]\` . Para ter acesso a minha Lista de Comandos digite \`[ $getServerVar[prefix]help ]\`.]
 
$footer[Executado por $userTag[$authorID];$authorAvatar]
$addTimestamp
$color[$getVar[color]]
$onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Blacklist
<:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Cooldown
<:mt_ar:912044933626626088>╰ <@$authorID>, Vai com calma pequeno Einstein. Espere %time% para executar meus comandos!}{delete:15s}]
    `
})
