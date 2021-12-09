module.exports = [{
    name: "eval",
    description: "Evaluate",
    category: "Devs",
    aliases: ["e", "ev"],
    code: `
  $if[$isNumber[$message]==true]
$reactionCollector[$splitText[1];$authorID;5m;❌;exeval;yes]
$textSplit[$sendMessage[{thumbnail:$authorAvatar}{color:#2f3136}{description:> Tipo » \`number\`
> Tempo de execução » \`$random[1;30]ms\`
  
**->** » Entrada
\`\`\`js
$message
\`\`\`
    
**<-** » Saída
\`\`\`js
$eval[$message;yes]
\`\`\`}{footer:Eval -・- $username[$authorID]:$authorAvatar};yes]; ]
  $suppressErrors
  
$elseif[$isNumber[$message]==false]
$reactionCollector[$splitText[1];$authorID;5m;❌;exeval;yes]
$textSplit[$sendMessage[{thumbnail:$authorAvatar}{color:#2f3136}{description:> Tipo » \`string\`
> Tempo de execução » \`$random[1;30]ms\`
  
**->** » Entrada
\`\`\`js
$message
\`\`\`
    
**<-** » Saída
\`\`\`js
$eval[$message;yes]
\`\`\`}{footer:Eval -・- $username[$authorID]:$authorAvatar};yes]; ]
  $suppressErrors
$endelseif
$endif
$argsCheck[>1;<@$authorID>{description::no_entry_sign: **» Erro!**
  <:mt_ar:912044933626626088>╰ <@$authorID>, Digite algo para inspecionar.}{color: #ff0000}]
  $onlyForIDs[424931675009712128;<@$authorID>{description::no_entry_sign: **» Erro!**
  <:mt_ar:912044933626626088>╰ <@$authorID>, Apenas meus desenvolvedor pode executar este comando!}{color: #ff0000}]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:#2f3136}{description::no_entry_sign: » Blacklist
  <:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
  `
  }, {
    type: 'awaitedCommand',
    name: 'exeval',
    code: `
    $deleteMessage[$message[1]]
  `,
  }]
  