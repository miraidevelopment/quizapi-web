module.exports = ({
    name: "setprefix",
    description: "Configuração do Prefix do bot no servidor",
    category: "Bot",
    perms: "Este comando solicita que você tenha a permissão de gerenciar o servidor.",
    usage: "setprefix <novo-prefixo>",
    aliases: ["set-prefix", "setprefixo", "set-prefixo"],
    code: `
$setServerVar[prefix;$message]
$description[:cloud: » **Prefix**
<:mt_ar:912044933626626088>╰ <@$authorID>, Prefixo alterado para \`$message\`]
$color[$getVar[color]]
$argsCheck[>1;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: **» Prefix**
<:mt_ar:912044933626626088>╰ <@$authorID>, Digite o prefixo que deseja setar}]
 
$onlyPerms[manageserver;{description::no_entry_sign: **» Erro**
<:mt_ar:912044933626626088>╰ <@$authorID>, Você não tem a permissão de \`GERENCIAR SERVIDOR\` para executar este comando!}{color: ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: **» Blacklist**
<:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: **» Cooldown**
<:mt_ar:912044933626626088>╰ <@$authorID>, Vai com calma pequeno Einstein. Espere %time% para executar meus comandos!}{delete:15s}]
    `
})