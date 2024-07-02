import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

import dotenv from 'dotenv'
dotenv.config()

const ownervb = process.env.OWNERS;
if (!ownervb){
   throw new Error("OWNERS env is not set");
}

const ownerlist = ownervb.split(';');

global.owner = [];
for (let i = 0; i < ownerlist.length; i += 2) {
    const owner = [
        ownerlist[i],            
        ownerlist[i + 1],         
        true                        
    ];
    global.owner.push(owner);
}

//💌------------------------------------------💌


//💌global.pairingNumber = "+94774721911" //put your bot number here💌
global.mods = ['+94774721911'] 
global.prems = ['']
global.allowed = ['']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
//💌------------------------------------------💌



//💌------------------------------------------💌
//CONFIG VARS. Do not touch them⚠️

  global.vidcap = process.env.DL_MSG


//💌------------------------------------------💌

global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NKSGloTkluTEwvd0s2eXN3Tks5Wmx2QmtwWFVhTkdjMEgxOCthN3hHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXpFbkFPZDdIM3BML29KNFBxTTh1ZjdnZEpNeTlXdTJYSkRiQzh4QVV5Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXR01Dcmo3cHg2bkg1MTlGaGVqRzJCdUVWSk9ydW81M1YxcGNnQUkyaTJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaQUNmcys4WjZTZ0l4cnVhT3AxSHhWdzJ0SGR0aUJNaEtTaU04b1d2clJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIdmlZa3hqV1JDM1d0WjJBTHhKcm5nK1V2SFkwQ0h1cnhOMHVzYVpNMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl6RVhEOWM1UllrSmE5bHRudFlWdk0yMkczczBUQzNGMG9ETmNTckxRQ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUF0a2hDUG9IbXMvb1hRbzJFRU83MkhicDhkZFFQcnJyK0JMSDBLUjQwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlB4a2F1Y0hReDY1TXlYeHhmR1A5bldXeGoySUF1UGNMc05pbEFMZGNXST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVQeEV4cFFITTBKSXp4REZ3MHYrd1hhMXFTNVpnaVVGMVM3Mm5BaityVEtERG5TNm4wcDJ5a2pScXZDUzZQR1dwNFJEV3hLRkNjZjBuSzVBUWYwYkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJFdFRBQTRUWHNPZWlBTVZXQTF6aklFL1BoWXI2T1hpSDNmbTN0WUdnaXh3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUOWtKdFphUFRocXQ0bXh0N3VEUDBRIiwicGhvbmVJZCI6IjE3MGMxM2YzLTMxM2UtNDZkNi05MGU3LWM2Zjg5ODFjODlhZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDS1ZpcGdsb1FrZUZrN2IwMEludzYrOHdXZTg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFzemc2UGhXV2tzQ1RNRFRJU0hVOFNZWTU4dz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xqUGdKOEVFSXpFa0xRR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFxWkY0U1NhcHFPd2NRQjhoYmx6MVQzNWZCbEdIQUIyVDVrSkY2ODFqQ1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNjMmYzQjJWdEZxNXh3M3NhaElad1pMY1lmQWJBT2R0L2QreVh6SWhINVJBUUZDUTdoSVNpT3VtSllYeTRLZXQySUlpZE56eng2b0NTdnlRdVlpRkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvd0FTSlZrMjB5a1o5dDlBMFBoZmR0RXMrNTZVbWlPeHE4UUZOYU1nNHl2dWYzZWgwaXc4RWQrdXNhYnQ4NUpQZnJCei9SbzNjWEJNWUI1eHNic2REZz09In0sIm1lIjp7ImlkIjoiOTQ3NzQ3MjE5MTE6ODNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XnPCdl6bwnZeb8J2XlPCdl6Eg8J2XnvCdl5TwnZeq8J2XnPCdl6bwnZebIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc0NzIxOTExOjgzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVLbVJlRWttcWFqc0hFQWZJVzVjOVU5K1h3WlJod0FkaytaQ1Jldk5Zd2wifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk5MzU1MDN9"

    
// APIS
global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
// 💌------------------------------------------💌



//APIs keys
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
   'https://api.fgmods.xyz': 'm2XBbNvz',
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`
   
}

//💌------------------------------------------💌



// Bot Images 
global.imagen1 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen2 = fs.readFileSync("./Assets/menus/Menu1.jpg")
global.imagen3 = fs.readFileSync("./Assets/menus/Menu2.jpg")
global.imagen4 = fs.readFileSync("./Assets/menus/Menu3.jpg")
global.imagen5 = fs.readFileSync("./Assets/menus/img2.jpg")
global.imagen6 = fs.readFileSync("./Assets/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./Assets/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./Assets/menus/img8.jpg")
global.imagen9 = fs.readFileSync("./Assets/menus/img9.jpg")
global.imagen10 = fs.readFileSync("./Assets/menus/img11.jpg")
global.imagen11 = fs.readFileSync("./Assets/menus/img12.jpg")
//💌------------------------------------------💌









// Randome
global.princeImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11]
//💌------------------------------------------💌



// Moderator 
global.developer = 'https://wa.me/message/DCAK67ON3XVOG1' //contact
//💌------------------------------------------💌



//Sticker WM
global.botname = process.env.BOT_NAME
global.princebot = '🛡️𝘗𝘙𝘐𝘕𝘊𝘌-𝘉𝘖𝘛-𝘔𝘋🛡️'
global.packname = 'ISHAN♥️' 
global.author = 'ISHAN♥️' 
global.princeig = 'https://www.instagram.com' 
global.princegp = 'https://chat.whatsapp.com/GWJkAJSgbv27sGOMLAzMDS'
global.menuvid = 'https://i.imgur.com/GFAAXqw.mp4'
global.Princesc = 'https://github.com/PRINCE-GDS/THE-PRINCE-BOT' 
global.princeyt = 'https://youtube.com/'
global.Princelog = 'https://i.imgur.com/cUvIv5w.jpeg'
global.thumb = fs.readFileSync('./Assets/Prince.png')
//💌------------------------------------------💌



//Reactions
global.wait = '*♻️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝙵𝙸𝙻𝙴 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.imgs = '*🖼️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 ɪᴍᴀɢᴇs 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 
global.multiplier = 69 
global.maxwarn = '2' 
//💌------------------------------------------💌






let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
