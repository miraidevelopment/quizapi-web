module.exports = ({
    name: "avatar",
    description: "Mostra o Avatar seu ou do usuario desejado.",
    category: "Utils",
    perms: "Este comando não solicita permissões.",
    usage: "avatar <usuario> ou avatar",
    aliases: ["av"],
    code: `
$apiMessage[$channelID;;{footer:Downloads#COLON#}{title: :sunrise: » Avatar de $username[$findUser[$message;yes]]}{image:$replaceText[$replaceText[$userAvatar[$findUser[$message]];?size=2048;?size=4096];webp;png]}{description:<:mt_ar:912044933626626088>╰ <@$findUser[$message;yes]> Que foto zika meu amigo! Muito bom gosto :3!

    __Comando executado por $userTag__}{color:$getVar[color];{actionRow:PNG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;png];jpg;png];jpeg;png];webp;png];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:JPG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpg];png;jpg];jpeg;jpg];webp;jpg];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:GIF,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];png;gif];jpg;gif];jpeg;gif];gif;gif];webp;gif];?size=2048;?size=4096];:;#COLON#]};;no]
$onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Blacklist
<:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Cooldown
<:mt_ar:912044933626626088>╰ <@$authorID>, Vai com calma pequeno Einstein. Espere %time% para executar meus comandos!}{delete:15s}]
  `
  })
