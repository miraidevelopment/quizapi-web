module.exports = {
    name: "ping",
    description: "Mostrando a latência do Quiz Api BOT.",
    category: "Bot",
    perms: "Este comando não solicita permissões.",
    usage: "ping",
    aliases: ["ms","latency","latencia","latência"],
    code: `
$reply[$messageID;:ping_pong: <@$authorID> pong!
**Quiz Api Shard $shardID / 1**(\`$replaceText[$replaceText[$shardID;0;Albert Einstein];1;Aristóteles]\`){description: \💡 » Minha Latência é:
<:mt_ar:912044933626626088>╰ \`$botPingms\`
\⚡ »  Latência da Gateway:
<:mt_ar:912044933626626088>╰ \`$djsEval[client.ws.ping;yes]ms\`}{color: $getVar[color]}{footer: Executado por $userTag[$authorID]:$authorAvatar}{timestamp};yes]

$onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Blacklist
<:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Cooldown
<:mt_ar:912044933626626088>╰ <@$authorID>, Vai com calma pequeno Einstein. Espere %time% para executar meus comandos!}{delete:15s}]
    `
}