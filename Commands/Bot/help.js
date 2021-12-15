module.exports = ({
    name: "help",
    description: "Lista de comandos do Quiz Api BOT",
    category: "Bot",
    perms: "Este comando não solicita permissões.",
    usage: "help",
    aliases: ["h","ajuda","cmds","comandos","commands"],
    code: `
$reply[$messageID;{author: Minha lista de comandos:$authorAvatar}
{thumbnail: $userAvatar[$clientID]}
{description: \`\`\`
Ao total, eu tenho 10 comandos. Meus comandos básicos para uso, se encontram abaixo dividos em suas devidas categorias:
\`\`\`
\`💡\` __Bot:__(\`6\`)
\`help\`・\`botinfo\`・\`ping\`・\`setprefixo\`・\`status\`・\`versão\`

\`📝\` __Utilidades:__(\`4\`)
\`afk\`・\`avatar\`・\`commandinfo\`・\`serverinfo\`
}
{color: $getVar[color]}
{footer: © 2021 Quiz Api. Todos os direitos reservados.:$userAvatar[$clientID]}
;yes]
$onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Blacklist
<:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Cooldown
<:mt_ar:912044933626626088>╰ <@$authorID>, Vai com calma pequeno Einstein. Espere %time% para executar meus comandos!}{delete:15s}]
    `
})