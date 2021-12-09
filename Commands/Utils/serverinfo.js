module.exports = ({
    name: "serverinfo",
    description: "Principais informações do servidor",
    category: "Utils",
    perms: "Este comando não solicita permissões.",
    usage: "serverinfo",
    aliases: ["infoserver","info-server","server-info"],
    code: `
$reply[$messageID;{thumbnail: $serverIcon}
{author: $serverName[$guildID]:https\#COLON#//cdn.discordapp.com/emojis/880845544250032209.png?v=1}
{description: #LEFT_CLICK#:mt_ar:912044933626626088#RIGHT_CLICK#╰ \`\`\`[ Abaixo se encontra as informações sobre o servidor ]\`\`\`
\#COLON#loudspeaker\#COLON# **Importantes**
#LEFT_CLICK#\#COLON#mt_ar\#COLON#912044933626626088#RIGHT_CLICK#**╰Dono** #LEFT_CLICK#@$ownerID#RIGHT_CLICK# | \`[ $ownerID ]\`
#LEFT_CLICK#\#COLON#mt_ar\#COLON#912044933626626088#RIGHT_CLICK#**╰ID do Servidor** \`[ $guildID ]\`
#LEFT_CLICK#\#COLON#mt_ar\#COLON#912044933626626088#RIGHT_CLICK#**╰ShardID** [ $shardID (\`$replaceText[$replaceText[$shardID;0;Albert Einstein];1;Aristóteles]\`) ]
#LEFT_CLICK#\#COLON#mt_ar\#COLON#912044933626626088#RIGHT_CLICK#**╰Criado em** $creationDate[$guildID] | (\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$guildID;time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora]\`)
#LEFT_CLICK#\#COLON#mt_ar\#COLON#912044933626626088#RIGHT_CLICK#**╰Eu entrei no servidor em** $memberJoinedDate[$clientID] | (\`$replacetext[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$clientID;time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora]\`)
#LEFT_CLICK#\#COLON#mt_ar\#COLON#912044933626626088#RIGHT_CLICK#
}

{field: \#COLON#pencil\#COLON# **Dados**:**Membros** (\`$numberSeparator[$membersCount]\`)
**Emojis** (\`$numberSeparator[$emojiCount]\`)
**Cargos** (\`$numberSeparator[$roleCount]\`):yes}

{field: \#COLON#globe_with_meridians\#COLON# **Canais ($channelCount)**: **Texto** (\`$numberSeparator[$sum[$channelCount[text];$channelCount[news]]]\`)
**Voz** (\`$numberSeparator[$channelCount[voice]]\`)
**Estágio** (\`$numberSeparator[$channelCount[stage]]\`):yes}

{field: \#COLON#crystal_ball\#COLON# **Booster**: **Boosts** (\`$numberSeparator[$serverBoostCount]\`)
**Nível** (\`$serverBoostLevel\`):yes}
{image: $replaceText[$replaceText[$replaceText[$serverSplash;webp;png];null;https\#COLON#//cdn.discordapp.com/attachments/858905592801656853/867814690482028564/banner_invisible.png];size=2048;size=4096]}
{footer: Solicitado por $username:$authorAvatar}
{timestamp}
{color: $getVar[color]};yes]
$onlyIf[$getGlobalUserVar[bl;$authorID]==no;#LEFT_CLICK#@$authorID#RIGHT_CLICK#{color:$getVar[color]}{description::no_entry_sign: » Blacklist
#LEFT_CLICK#:mt_ar:912044933626626088#RIGHT_CLICK#╰ #LEFT_CLICK#@$authorID#RIGHT_CLICK#, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;#LEFT_CLICK#@$authorID#RIGHT_CLICK#{color:$getVar[color]}{description::no_entry_sign: » Cooldown
#LEFT_CLICK#:mt_ar:912044933626626088#RIGHT_CLICK#╰ #LEFT_CLICK#@$authorID#RIGHT_CLICK#, Vai com calma pequeno caçador. Espere %time% para executar meus comandos!}{delete:15s}]
    `
})
