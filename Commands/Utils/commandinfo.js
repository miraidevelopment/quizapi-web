module.exports = {
    name: "commandinfo",
    usage: "commandinfo <ping>",
    perms: "Este comando não solicita permissões.",
    category: "Utilidades",
    description: "Use para ver as informações dos Comandos.",
    aliases: ["cmdsinfo", "cmdinfo", "cmdinfos", "cmdsinfos"],
    code: `
$color[$getVar[color]]
$thumbnail[$userAvatar[$clientID]]
$author[$userTag[$clientID];$userAvatar[$clientID]]
$description[:bookmark_tabs: **» Informações do Comando**
<:mt_ar:912044933626626088>╰ Nome: \`[ $commandInfo[$message;name] ]\`
<:mt_ar:912044933626626088>╰ Descrição: \`[ $commandInfo[$message;description] ]\`
<:mt_ar:912044933626626088>╰ Sinônimos: \`[ $replaceText[$commandInfo[$message;aliases];,;, ] ]\`
<:mt_ar:912044933626626088>╰ Categoria: \`[ $commandInfo[$message;category] ]\`
<:mt_ar:912044933626626088>╰ Permissões: \`[ $commandInfo[$message;perms] ]\`
<:mt_ar:912044933626626088>╰ Modo de Uso: \`[ $getServerVar[prefix]$commandInfo[$message;usage] ]\`  ]
$footer[Argumento Obrigatório <> | Argumento Opicional ();$authorAvatar]
$onlyIf[$commandInfo[$message;name]!=;]
$onlyIf[$commandInfo[$message;aliases]!=;]
$argsCheck[>1;{color:$getVar[color]}{description::no_entry_sign: » Falta de Argumentos
    <:mt_ar:912044933626626088>╰ <@$authorID>, Você precisa dizer o nome do comando para pegar as informações dele!}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Blacklist
<:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Cooldown
<:mt_ar:912044933626626088>╰ <@$authorID>, Vai com calma pequeno caçador. Espere %time% para executar meus comandos!}{delete:15s}]  
`
}