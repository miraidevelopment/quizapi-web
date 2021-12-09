module.exports = ({
    name: "status",
    description: "Status em detalhes do Mutano™",
    category: "Bot",
    perms: "Este comando não solicita permissões.",
    usage: "status ou $getServerVar[prefix]status shard",
    aliases: ["stats"],
    code: `
$if[$message[1]==]
$color[$getVar[color]]
$thumbnail[$userAvatar[763109929300262953]]
$author[STATUS]
$description[:cloud: **» Status Quiz Api\™**
\`\`\`
Aqui estão as informações atuais sobre o meu status
\`\`\`]

$addField[\`🏆\` » **Canais**;╰\`[ $abbreviate[$djsEval[client.shard.fetchClientValues('channels.cache.size').then(a => eval(a.join("+")));yes]] ]\`;yes]

$addField[\`📝\` **Comandos:**;╰ \`[ $sub[$commandsCount;6] ]\`;yes}

$addField[\`👥\` » **Usuários**;╰ \`[ $abbreviate[$djsEval[client.shard.broadcastEval("this.guilds.cache.map((g) => g.memberCount || 0).reduce((x, y) => x + y, 0)").then(a => eval(a.join("+")));yes]] ]\`;yes]

$addField[\`🌎\` » **Servidores**;╰ \`[ $abbreviate[$djsEval[client.shard.fetchClientValues('guilds.cache.size').then(a => eval(a.join(",").split(",").map(a => Number(a)).join("+")));yes]] ]\`;yes]

$elseif[$message[1]==shard]
$color[$getVar[color]]
$thumbnail[$userAvatar[763109929300262953]]
$author[STATUS]
$description[:cloud: **» Status Quiz Api - ShardID $shardID (\`$replaceText[$replaceText[$shardID;0;Albert Einstein];1;Aristóteles]\`)** \`\`\`
Aqui estão as informações atuais sobre o meu status
\`\`\`]

$addField[\`🏆\` » **Canais**;╰\`[ $abbreviate[$allChannelsCount] ]\`;yes]

$addField[\`📝\` **Comandos:**;╰ \`[ $sub[$commandsCount;6] ]\`;yes]

$addField[\`👥\` » **Usuários**;╰ \`[ $abbreviate[$allMembersCount] ]\`;yes]

$addField[\`🌎\` » **Servidores**;╰ \`[ $abbreviate[$serverCount] ]\`;yes]
$endelseif
$endif
$onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:1ad46d}{description::no_entry_sign: » Blacklist
<:mt_ar:885116547264290938>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;<@$authorID>{color:1ad46d}{description::no_entry_sign: » Cooldown
<:mt_ar:885116547264290938>╰ <@$authorID>, Vai com calma pequeno caçador. Espere %time% para executar meus comandos!}{delete:15s}]
    `
})