const { launchTelegram } = require('./telegram');
const { restoreAll } = require('./whatsapp');
const { launchSite } = require('./site');

(async () => {
  await launchTelegram();
  await restoreAll();
  launchSite();
  console.log('✅ Joker.md bot V1.1 demaré nèt: Telegram + WhatsApp + Sit web');
})();

process.on('uncaughtException', e => console.error('Erè:', e));
process.on('unhandledRejection', e => console.error('Rejè:', e));
