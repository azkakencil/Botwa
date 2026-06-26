/**

╔═━━━━✦❘༻ Licensi Resmi ༺❘✦━━━━═╗
Script ini merupakan karya resmi dan original oleh:
★ FallZx Infinity ★

Refactoring dari: Encore MD  
Project Kolaborasi: Cantarella × Encore  
Menggunakan Baileys Optimah dari:
📁 github: FallEzz/baileys-corp

────────────────────────────────────
💠 Keuntungan Penggunaan Script 💠
✔ Anti Delay  
✔ Anti Rate Over Limit  
✔ Fast Response Engine  

────────────────────────────────────
📌 PERINGATAN ❗
DILARANG Upload / Repost / Record / Review  
Tanpa Izin Resmi dari Pemilik Asli

Silakan hubungi:
☎ Wa: 6285813708397  
📸 IG: Fallxd_781  

Segala bentuk penyalahgunaan akan dikenakan tindakan tegas sesuai ketentuan kreator.

────────────────────────────────────
⭑ Hak cipta sepenuhnya dimiliki oleh:
🄯 FallZx Infinity

Terima kasih telah menghargai karya dan kreator ✦

╚═━━━━✦❘༺ End License ༻❘✦━━━━═╝

**/
require("./Cantarella")
const fs = require('fs')
const { version } = require("./package.json")
//~~~~~~~~~SETTING BOT~~~~~~~~~~//

// Bebas Ubah
global.owner = "6285813708397"
global.nobot = "6285813708397"
global.namaowner = "ғᴀʟʟᴢx || ᴄᴀɴᴛᴀʀᴇʟʟᴀ"
global.namaBot = "ᴄᴀɴᴛᴀʀᴇʟʟᴀ"
global.title = "ᴅᴇᴠs || ᴄᴀɴᴛᴀʀᴇʟʟᴀ"
global.thumnail2 = "https://img1.pixhost.to/images/10636/667923662_lightsecret.jpg"
// Jangan Di ubah
global.creator = `${owner}@s.whatsapp.net` 
global.foother = `© ${namaBot}`
global.versi = "New"
global.nama = namaBot 
global.namach = nama 
global.namafile = foother 
global.author = namaowner


global.frch = ["c97d9437c6b686e051e7bb4adc59e68a6c34fee821ef0ba859a54950ad344bf4",
"Isi Apikeys Mu" // Dapatkan apikey di https://asitha.top/login?ref=hillaryy2555
]




// Bebas Ubah
// True = on || False = Off 
global.status = true
global.owneroff = true
global.autoread = true
global.autotyping = true
global.Antilinkgc = true
global.Antilinkch = true
global.antispam = true
global.onlygc = false

// Set Payment
global.qris = "https://files.catbox.moe/iwpd4i.jpg"
global.dana = "085813708397"
global.gopay = "085813708397"

// ===={ Set Link }
global.ch = 'https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D'
global.idch = '120363186130999681@newsletter'
global.linkgc = 'https://chat.whatsapp.com/L76YNpx5yqU4NGVIDQ1GUM'
global.yt = 'https://youtube.com/@fallzx-features'
global.nekorin = "https://api.nekorinn.my.id"
global.idgc = "120363399209756764@g.us"
// set prefix
global.setprefix = ".", "/", "#"

// User Sosmed
global.tt = "@siapaa_2022"
global.yt = "@fallzx-features"
global.ig = "@fallxd_781"

// Setting Api cVPS
global.doToken = "APIKEY"
global.linodeToken = "APIKEY"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://"
global.apikey = "ptla" //ptla
global.capikey = "ptlc" //ptlc

// [ THEME URL & URL ] ========//
global.thumbnail = 'https://img1.pixhost.to/images/10635/667921457_lightsecret.jpg'

// Settings reply ~~~~~~~~~//
global.mess = {
    owner: "Khusus Owner",
    prem: "Khusus Premium",
    group: "Khusus di Group Chat",
    admin: "Khusus Admin",
    botadmin: "Bot Harus Jadi Admin",
    private: "Khusus di Private Chat",
    done: "Sukses"
}

global.packname = nama
global.author = namaBot

//
global.gamewaktu = 60 // Game waktu
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar2 = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
