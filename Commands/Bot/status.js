module.exports = ({
    name: "status",
    description: "Status em detalhes do Quiz Api BOT",
    category: "Bot",
    perms: "Este comando não solicita permissões.",
    usage: "status",
    aliases: ["stats"],
    code: `
$color[$getVar[color]]
$thumbnail[$userAvatar[$clientID]]
$author[STATUS]
$description[:cloud: **» Status Quiz Api\™**
\`\`\`
Aqui estão as informações atuais sobre o meu status
\`\`\`]

$addField[\`🏆\` » **Canais**;╰\`[ $abbreviate[$allChannelsCount] ]\`;yes]

$addField[\`📝\` **Comandos:**;╰ \`[ 11 ]\`;yes]

$addField[\`👥\` » **Usuários**;╰ \`[ $abbreviate[$allMembersCount] ]\`;yes]

$addField[\`🌎\` » **Servidores**;╰ \`[ $abbreviate[$serverCount] ]\`;yes]

$onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:1ad46d}{description::no_entry_sign: » Blacklist
<:mt_ar:885116547264290938>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;<@$authorID>{color:1ad46d}{description::no_entry_sign: » Cooldown
<:mt_ar:885116547264290938>╰ <@$authorID>, Vai com calma pequeno Einstein. Espere %time% para executar meus comandos!}{delete:15s}]
    `
})