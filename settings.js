const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'PTxW7omy',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read pesan / message
//global.autorecording = true //status auto merekam ( auto record )
//global.autoketik = false //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "Cxyoo Botz" //namabot kalian
global.ownername= "Stvn" //nama kalian
global.myweb ="https://www.youtube.com/channel/UCZ_GA4pb1Hjsh9Bm9Ul7LgQ" //bebas asal jan hapus
global.youtube = "https://www.youtube.com/channel/UCZ_GA4pb1Hjsh9Bm9Ul7LgQ" //bebas asal jan hapus
global.github = "https://github.com/iStvnbotz" //bebas
global.email = "zyens80@hotmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "6287814897547" // nomor wa kalian
global.ownernomerr = "+6287814897547" //nmr wa kalian
global.thumbnail = "./image/cxyoo.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "" // foto donasi di folder image
global.background_welcome="./image/welcome.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6287814897547"] //ganti agar fitur owner bisa di gunakan
global.packname = 'Cxyoo Botz' //sticker wm ubah
global.author = 'Stvn' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: 'Succes',
    admin: 'Only Admin Can Use Command in !!',
    botAdmin: 'I need to be an admin first !!',
    owner: 'This command is only used by Stvn',
    group: 'Can only use this command in grub !',
    private: 'Can only use this command in private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳Procces',
	lockCmd: 'The feature is not activated by the bot owner !',
	example1: 'Hii @user Welcome To @subject Dont Forget to Read the Group Description'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
