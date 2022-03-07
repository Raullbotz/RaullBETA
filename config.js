global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD', 'https://chat.whatsapp.com/GzDQlgoUamS5Ok4EOcYRRB']
global.Owner = {
  // use the phone number with the country code, for example Indonesia '62' America '1' etc
  '6283843275967': { // put your number here
    name: 'Owner Raull Botz',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6283843275967': { // put your number here
    name: 'PutraXD (Creator2 Botz)',
    isDev: true,
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6283843275967': { // put your number here
    name: 'PutraXD (Testing Botz',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '62895390407770': {
    name: 'Raull Botz',
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '13479805233': {} // ignore if you don't want anything, like name dll
}
global.mods = ['6288229683561'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'http://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Copyright Raull Botz'
global.author = 'Lord Botz Best Bot\nCopyright Lord Botz for ©PutraXD\n*────「 Big Thx For 」────*\n*Allah SWT*\n*Nurutomo*\n*Ariffb*\n*BochilGaming*\n*AmmarBN*\n*games-wabot*\n*LanXBot*\n*Adiwajshing*\n*Baileys*'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

