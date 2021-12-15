module.exports = ({
    name: "help",
    description: "Lista de comandos do Quiz Api BOT",
    category: "Bot",
    perms: "Este comando não solicita permissões.",
    usage: "help <sigla da categoria>",
    aliases: ["h","ajuda","cmds","comandos","commands"],
    code: `
$reply[$messageID;{author: Minha lista de comandos:$authorAvatar}
{thumbnail: $userAvatar[$clientID]}
{description: \`\`\`
Meus comandos básicos para uso, se encontram abaixo dividos em suas devidas categorias:
\`\`\`
\`💡\` __BOT__

}
{color: $getVar[color]}  
;yes]
    `
})