require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details{"noiseKey":{"private":{"type":"Buffer","data":"8Oe30G4vF3X3ZX5XRZuX6f7sVp3n9pWp+0FCVk3vJUQ="},"public":{"type":"Buffer","data":"y3L4ZZLl/V2rcLlhF7yRGTeu3VHwScnKQpOcLTm9tGI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"WPkr6rm2vC3kSm9D2CMRZA7lYsQgzX7wRA1VEnehemg="},"public":{"type":"Buffer","data":"uvjopAeb+GApPPSBBIx75q6/NxUJV5JpM0GyOhB9Ywg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"2LlnSPsuvIMJt83ijT7cwLOBDzIVp98hq4doCvn4X18="},"public":{"type":"Buffer","data":"FkRRY1z3sQfDkuUfMIxHtclzoorMEmVhGb2kZ8QtlDc="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CCpCajQmHP0HMlyZCxaX7I1xZ6T4Wm5g8dK7pgCkKEU="},"public":{"type":"Buffer","data":"RtqJPEBHl5raQNDU7XD7q8LGvmf2hU4hdA2eeToC90U="}},"signature":{"type":"Buffer","data":"PqJ6i8P3sTBaziB9G3XoOTUPUDYpjWcKPjL+Ctie1Y9xJfU7drU7I6SDZTszNrYbUDsu8XgVHyZEVwIbRqhKDA=="},"keyId":1},"registrationId":28,"advSecretKey":"IKnmBBwfAbpESziBHTO8I4mrmvkcOMSWxgPQD2jairE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":false,"account":{"details":"COGNrGcQiIPr1QYYASAAKAA=","accountSignatureKey":"sRj7cwifn441NkFeOjZjwJOasV2+hZiGIkkjBfuRJyY=","accountSignature":"sDJ46Ac9hEtmazNvYjWXyvX/UzKqdIKZ5WNL3MRll4KSRE78/rwDmeR+xkQMuc42HL4aBlNfaxedBDzKYmpEDQ==","deviceSignature":"fgtmCXMD3vRV1i63GAEAPyUiYQKDOocxcbk73xMAeOuQIrx6MuaUhpqPgnXwu5bNUkmxCjWf1oDVjRycQLlmCA=="},"me":{"id":"255772499518:4@s.whatsapp.net","lid":"160456320806918:4@lid"},"signalIdentities":[{"identifier":{"name":"255772499518:4@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BbEY+3MIn5+ONTZBXjo2Y8CTmrFdvoWYhiJJIwX7kScm"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAUIAggN"},"lastAccountSyncTimestamp":1790624153,"myAppStateKeyId":"AAAAABEI"}
global.sessionid = process.env.SESSION_ID || '';
global.dbSite = process.env.DB_SITE || '';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.prefix = process.env.PREFIX || '.';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false';
global.autoviewstatus = process.env.AUTO_VIEW_STATUS !== 'false';
global.welcome = process.env.WELCOME !== 'false';
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';
global.autoOffline = process.env.AUTO_OFFLINE === 'true';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'EliteProTech\n\nContact: +2347047504860';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '✅ Task completed successfully!',
    prem: '⚠️ Access denied. This feature is for premium users only.',
    admin: '⚠️ Only group admins can use this command.',
    botAdmin: '⚠️ I need to be a group admin to use this command.',
    owner: '⛔ Command restricted to the bot owner.',
    group: 'ℹ️ This command can only be used in group chats.',
    private: 'ℹ️ This command can only be used in private chats.',
    wait: '⏳ Processing your request... Please wait a moment.',
    error: '❌ An unexpected error occurred. Please try again later.',
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Updated: ${__filename}`));
    delete require.cache[file];
    require(file);
});
