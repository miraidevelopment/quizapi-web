module.exports = {
    name: "ping",
    description: "Mostrando a latência do Quiz Api BOT.",
    category: "Bot",
    perms: "Este comando não solicita permissões.",
    usage: "ping ou $getServerVar[prefix]ping status",
    aliases: ["ms","latency","latencia","latência"],
    code: `
$if[$message[1]==]
$reply[$messageID;:ping_pong: <@$authorID> pong!
**Quiz Api Shard $shardID / 4**(\`$replaceText[$replaceText[$shardID;0;Albert Einstein];1;Aristóteles]\`){description: \💡 » Minha Latência é:
<:mt_ar:912044933626626088>╰ \`$botPingms\`
\⚡ »  Latência da Gateway:
<:mt_ar:912044933626626088>╰ \`$djsEval[client.ws.ping;yes]ms\`}{color: $getVar[color]}{footer: Executado por $userTag[$authorID]:$authorAvatar}{timestamp};yes]

 
$elseif[$message[1]==shards]
$reply[$messageID;\`\`\`js
$log[$error]
#RIGHT#  📑 ・  Shard ID Number  -  #RIGHT#    0    |   1    #LEFT#
=======================・=========・=========・=======================
        #RIGHT#  📉 ・ WebSocket Latency  - $replaceText[$replaceText[$djsEval[client.shard.fetchClientValues('ws.ping');yes];,; ms  | ];#LEFT#;ms] #LEFT#
        #RIGHT#  🌐 ・   Servers Counter   -   $replaceText[$replaceText[$replaceText[$djsEval[client.shard.fetchClientValues('guilds.cache.size');yes];,;   |   ];,;   |   ];,;   |   ]
        #RIGHT#  📋 ・  Channels Counter  - $replaceText[$replaceText[$replaceText[$djsEval[client.shard.fetchClientValues('channels.cache.size');yes];,;  |  ];,; |   ];,;  | ]
        #RIGHT#  👥 ・  Users Counter  -  $replaceText[$replaceText[$replaceText[$djsEval[client.shard.broadcastEval("this.guilds.cache.map((g) => g.memberCount || 0).reduce((x, y) => x + y, 0)").then(a => a);yes];,;  |  ];,;  |  ];,;  |  ]
    #RIGHT#  💡 ・Identification Name - #RIGHT#Albert Einstein  |  Aristóteles  #LEFT#

==========・======・========・== Uptime ==・======・=======・==========
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$get[uptime0];,; | ];id;ShardID];value;Time];\#LEFT_BRACKET#;\#LEFT#];\#RIGHT_BRACKET#;\#RIGHT#];undefined;Shard 0 Desligada]
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$get[uptime1];,; | ];id;ShardID];value;Time];\#LEFT_BRACKET#;\#LEFT#];\#RIGHT_BRACKET#;\#RIGHT#];undefined;Shard 1 Desligada]
\`\`\`;yes]

$let[uptime0;$djsEval[(async() => #RIGHT_BRACKET#
    let ms = require("parse-ms")
    let values = await client.shard.fetchClientValues("uptime")
    let data = #RIGHT##LEFT#
    values.map((value, shard) => #RIGHT_BRACKET#
    let abc = ms(value)
    data.push(#RIGHT_BRACKET# id#COLON# shard, value#COLON# \`#CHAR##RIGHT_BRACKET#abc.days#LEFT_BRACKET# dia(s) #CHAR##RIGHT_BRACKET#abc.hours#LEFT_BRACKET# hora(s) #CHAR##RIGHT_BRACKET#abc.minutes#LEFT_BRACKET# minuto(s) #CHAR##RIGHT_BRACKET#abc.seconds#LEFT_BRACKET# segundo(s)\`
    #LEFT_BRACKET#)
    #LEFT_BRACKET#)
    return data#RIGHT#0#LEFT#
    #LEFT_BRACKET#)();yes]]
$let[uptime1;$djsEval[(async() => #RIGHT_BRACKET#
    let ms = require("parse-ms")
    let values = await client.shard.fetchClientValues("uptime")
    let data = #RIGHT##LEFT#
    values.map((value, shard) => #RIGHT_BRACKET#
    let abc = ms(value)
    data.push(#RIGHT_BRACKET# id#COLON# shard, value#COLON# \`#CHAR##RIGHT_BRACKET#abc.days#LEFT_BRACKET# dia(s) #CHAR##RIGHT_BRACKET#abc.hours#LEFT_BRACKET# hora(s) #CHAR##RIGHT_BRACKET#abc.minutes#LEFT_BRACKET# minuto(s) #CHAR##RIGHT_BRACKET#abc.seconds#LEFT_BRACKET# segundo(s)\`
    #LEFT_BRACKET#)
    #LEFT_BRACKET#)
    return data#RIGHT#1#LEFT#
    #LEFT_BRACKET#)();yes]]

$endelseif
$endif
$onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Blacklist
<:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Cooldown
<:mt_ar:912044933626626088>╰ <@$authorID>, Vai com calma pequeno caçador. Espere %time% para executar meus comandos!}{delete:15s}]
    `
}