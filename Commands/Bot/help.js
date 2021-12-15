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
Ao total, eu tenho 11 comandos. Meus comandos básicos para uso, se encontram abaixo dividos em suas devidas categorias:
\`\`\`
\`💡\` __Bot:__
\`botinfo\`・\`ping\`・\`setprefixo\`・\`status\`・\`versão\`

\`📝\` __Utilidades:__
\`afk\`・\`avatar\`・\`commandinfo\`・\`serverinfo\`
}
{color: $getVar[color]}
{footer: © 2021 Quiz Api. Todos os direitos reservados.:$userAvatar[$clientID]}
;yes]
    `
})