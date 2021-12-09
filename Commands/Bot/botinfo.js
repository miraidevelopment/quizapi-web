module.exports = [{
    name: "botinfo",
    description: "Saiba as informações básicas, detalhadas e técnicas do Quiz Api BOT.",
    usage: "botinfo",
    perms: "Este comando não solicita permissões.",
    category: "Bot",
    aliases: ["bi","bot","info","bot-info","infobot","info-bot", "techinfo", "tech-info", "bot-techinfo", "botinfo tec", "tecinfo", "tec-info", "tech-botinfo", "techbotinfo", "techbi"],
    code: `
$reactionCollector[$splitText[1];$authorID;2m;◀️,▶;tech3,tech2;yes]
$textSplit[$sendMessage[{thumbnail:$userAvatar[$clientID]}{description:
📋 **» Informações**
<:mt_ar:912044933626626088>╰ Olá **$username** tudo bem? Espero que sim. Se você chegou até aqui e está querendo ver mais informações, certamente você têm algum conhecimento prévio do que vai tratar abaixo, ou se somente ficou curioso para saber mais detalhes sobre mim, sobre partes mais técnicas e detalhadas. Tudo isso, você encontra aqui.
<:mt_ar:912044933626626088>╰ Para mais informações use \`[ $getServerVar[prefix]versão ]\` para ver minha versão, \` [ $getServerVar[prefix]ping ]\` e \` [ $getServerVar[prefix]ping shards]\` para ver minha latência ou a latência de minhas shards\`[ $getServerVar[prefix]status ]\` e \`[ $getServerVar[prefix]status shard ]\` para ver minha status geral e meus status nesta shard.

#️⃣ **» Tag e ID**
<:mt_ar:912044933626626088>╰ Tag \`[ $userTag[$clientID] ]\`
<:mt_ar:912044933626626088>╰ ID \`[ $clientID ]\`

📝 **» Dados de Armazenamento e Velocidade**
<:mt_ar:912044933626626088>╰ Banco de Dados \`[ Firebase ]\`
<:mt_ar:912044933626626088>╰ Hospedagem \`[ Heroku ]\`
<:mt_ar:912044933626626088>╰ Informações da Memória:
<:mt_ar:912044933626626088><:mt_ar:912044933626626088>╰ RAM: \`[ $ramMB/$replaceText[$abbreviate[$maxRam];K;GB;-1] ]\`
<:mt_ar:912044933626626088><:mt_ar:912044933626626088>╰ Armazenamento: \`[ $djsEval[process.memoryUsage().rss / 1024 / 1024;yes]MB ]\`
<:mt_ar:912044933626626088>╰ Informações da CPU:
<:mt_ar:912044933626626088><:mt_ar:912044933626626088>╰ Uso: \`[ $cpu% ]\`
<:mt_ar:912044933626626088><:mt_ar:912044933626626088>╰ Modelo: \`[ $replaceText[$replaceText[$djsEval[require ('os').cpus()[0].model;yes];linux;Linux];windows;Windows] ]\`
<:mt_ar:912044933626626088><:mt_ar:912044933626626088>╰ Plataforma: \`[ $djsEval[require ('os').platform();yes] ]\`

👨‍💻 **» Fui feito em**
<:mt_ar:912044933626626088>╰ [Aoi.js](https://aoi.js.org/) na linguagem [JavaScript](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript) usando [Node.js](https://nodejs.org/pt-br/about/)

📈 **» Versões**
<:mt_ar:912044933626626088>╰ PackageLib \`[ $packageVersion ]\`
<:mt_ar:912044933626626088>╰ Node.js \`[ $nodeVersion ]\`}{footer:Solicitado por $username:$authorAvatar}{color:$getVar[color]};yes]; ]
$onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Blacklist
<:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Cooldown
<:mt_ar:912044933626626088>╰ <@$authorID>, Vai com calma pequeno caçador. Espere %time% para executar meus comandos!}{delete:15s}]
    `
}, {
    type: 'awaitedCommand',
  name: 'tech2',
  code: `
$editMessage[$message[1];{thumbnail:$userAvatar[$clientID]}{description:
📋 **» Informações**
<:mt_ar:912044933626626088>╰ Olá **$username** tudo bem? Espero que sim. Se você chegou até aqui e está querendo ver mais informações, certamente você têm algum conhecimento prévio do que vai tratar abaixo, ou se somente ficou curioso para saber mais detalhes sobre mim, sobre partes mais técnicas e detalhadas. Tudo isso, você encontra aqui :)
<:mt_ar:912044933626626088>╰ Para mais informações use \`[ $getServerVar[prefix]versão ]\` para ver minha versão, \` [ $getServerVar[prefix]ping ]\` e \` [ $getServerVar[prefix]ping shards]\` para ver minha latência ou a latência de minhas shards\`[ $getServerVar[prefix]status ]\` e \`[ $getServerVar[prefix]status shard ]\` para ver minha status geral e meus status nesta shard.

📸 **» Minhas Datas**
<:mt_ar:912044933626626088>╰ Fui criado \`[ 07 de dezembro de 2021 às 23 horas 53 minutos e 24 segundos (horário de Brasília - BR) ]\`
<:mt_ar:912044933626626088>╰ Entrei aqui em \`[ $memberJoinedDate[$clientID] ]\` | \`($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$clientID;time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora])\`

**</>** **» Criador
<:mt_ar:912044933626626088>╰ \`$username[424931675009712128]#$discriminator[424931675009712128]\` | \`424931675009712128\` | [GitHub - GR](https://github.com/guihrib)}
{footer:Solicitado por $username:$authorAvatar}{color: $getVar[color]}]
`
}, {
  type: 'awaitedCommand',
  name: 'tech3',
  code: `
$editMessage[$message[1];{thumbnail:$userAvatar[$clientID]}{description:
📋 **» Informações**
<:mt_ar:912044933626626088>╰ Olá **$username** tudo bem? Espero que sim. Se você chegou até aqui e está querendo ver mais informações, certamente você têm algum conhecimento prévio do que vai tratar abaixo, ou se somente ficou curioso para saber mais detalhes sobre mim, sobre partes mais técnicas e detalhadas. Tudo isso, você encontra aqui :)
<:mt_ar:912044933626626088>╰ Para mais informações use \`[ $getServerVar[prefix]versão ]\` para ver minha versão, \` [ $getServerVar[prefix]ping ]\` e \` [ $getServerVar[prefix]ping shards]\` para ver minha latência ou a latência de minhas shards\`[ $getServerVar[prefix]status ]\` e \`[ $getServerVar[prefix]status shard ]\` para ver minha status geral e meus status nesta shard.

#️⃣ **» Tag e ID**
<:mt_ar:912044933626626088>╰ Tag \`[ $userTag[$clientID] ]\`
<:mt_ar:912044933626626088>╰ ID \`[ $clientID ]\`

📝 **» Dados de Armazenamento e Velocidade**
<:mt_ar:912044933626626088>╰ Banco de Dados \`[ Firebase ]\`
<:mt_ar:912044933626626088>╰ Hospedagem \`[ Heroku ]\`
<:mt_ar:912044933626626088>╰ Informações da Memória:
<:mt_ar:912044933626626088><:mt_ar:912044933626626088>╰ RAM: \`[ $ramMB/$replaceText[$abbreviate[$maxRam];K;GB;-1] ]\`
<:mt_ar:912044933626626088><:mt_ar:912044933626626088>╰ Armazenamento: \`[ $djsEval[process.memoryUsage().rss / 1024 / 1024;yes]MB ]\`
<:mt_ar:912044933626626088>╰ Informações da CPU:
<:mt_ar:912044933626626088><:mt_ar:912044933626626088>╰ Uso: \`[ $cpu% ]\`
<:mt_ar:912044933626626088><:mt_ar:912044933626626088>╰ Modelo: \`[ $replaceText[$replaceText[$djsEval[require ('os').cpus()[0].model;yes];linux;Linux];windows;Windows] ]\`
<:mt_ar:912044933626626088><:mt_ar:912044933626626088>╰ Plataforma: \`[ $djsEval[require ('os').platform();yes] ]\`

👨‍💻 **» Fui feito em**
<:mt_ar:912044933626626088>╰ [Aoi.js](https://aoi.js.org/) na linguagem [JavaScript](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript) usando [Node.js](https://nodejs.org/pt-br/about/)

📈 **» Versões**
<:mt_ar:912044933626626088>╰ PackageLib \`[ $packageVersion ]\`
<:mt_ar:912044933626626088>╰ Node.js \`[ $nodeVersion ]\`}{footer:Solicitado por $username:$authorAvatar}{color: $getVar[color]}]
`
}]