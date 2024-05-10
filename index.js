//Informacoes do criador
//Canal: youtube.com/@VenomModss                                
//Insta: instagram.com/venom_mods_ofc                                    
//Numero: +5511945052433
//Nick: Venom
const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'conexão.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Closed,reason is:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start() 
//Taira
