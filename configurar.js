const fs = require('fs')
const chalk = require('chalk')

//configurar dono
global.numerodono = "263784932864"
global.nomedono = "Makino"
global.nomebot = 'Makino' 
global.ytvenom = "YT: https://youtube.com"
global.prefixo = ","
global.instavenom = "INSTA: instagram.com"
global.local = "Brasil, AM, SP"

//pacote de figurinhas 
global.packnome = ''
global.author = ''

//false= desativado e true= ativado
global.autoGravar = false //gravação automática
global.autoDigitar = false //digitação automática
global.autoreDigitarGravar = false //digitação automática + gravação
global.autoVisualizarMsg = false //leitura automática de mensagens
global.autobio = false //atualização automática da bio
global.autovisualizar_status = false //visualização automática de status/história

//tipo de menu
//v1 =menu com imagem,
//v2 =menu com webpag,
//v3 =menu com gif,
//v4 =menu com chamada
//v5 =menu com documento webpag
global.tipomenu = 'v5'

//respostas
global.resposta = {
    feito: 'Done ✅',
    premium: 'This feature can only be used by premium users',
    admin: 'This feature can only be used by Admin',
    botAdmin: 'This feature can only be used when the bot is a group administrator',
    dono: 'This feature can only be used by the owner',
    grupo: 'This feature is for groups only',
    privado: 'This feature is for private chats only',
    aguarde: 'Wait a few minutes...',
    error: 'An Error occured',
}

global.thumb = fs.readFileSync('./dados/venom.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`configuration file has been updated`))
    delete require.cache[file]
    require(file)
})
