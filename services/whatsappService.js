// const { default: makeWASocket, useAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
// const fs = require('fs');
// const path = './auth_info.json';

// // Load saved authentication state if it exists
// let authState = {};
// if (fs.existsSync(path)) {
//   try {
//     authState = JSON.parse(fs.readFileSync(path, 'utf-8'));
//     console.log('Auth state loaded successfully.');
//   } catch (err) {
//     console.error('Error loading auth state:', err);
//   }
// }

// let sock;

// // Initialize WhatsApp connection
// const startWhatsApp = async () => {
//   console.log('Starting WhatsApp connection...');
  
//   sock = makeWASocket({
//     auth: authState,
//     printQRInTerminal: true,  // Show QR in terminal for the first-time scan
//   });

//   sock.ev.on('connection.update', (update) => {
//     const { connection, lastDisconnect } = update;

//     console.log('Connection update:', update);  // Add more logging to debug

//     if (connection === 'open') {
//       console.log('WhatsApp connection established!');
//     }

//     if (connection === 'close') {
//       const reason = lastDisconnect?.error?.output?.statusCode;
//       if (reason !== DisconnectReason.loggedOut) {
//         console.log('Reconnecting WhatsApp...');
//         startWhatsApp();  // Reconnect if disconnected
//       }
//     }
//   });

//   // Save the credentials after authentication
//   sock.ev.on('creds.update', (creds) => {
//     console.log('Credentials updated:', creds);  // Log credentials to see the saved state
//     fs.writeFileSync(path, JSON.stringify(creds));  // Save the credentials for future sessions
//   });
// };

// // Function to send WhatsApp message
// const sendWhatsAppMessage = async (phoneNumber, message) => {
//   if (!sock) {
//     console.log('WhatsApp socket not initialized');
//     return;
//   }
//   const formattedNumber = `${phoneNumber}@s.whatsapp.net`; // Ensure to append @s.whatsapp.net to the phone number
//   await sock.sendMessage(formattedNumber, { text: message });
// };

// module.exports = { startWhatsApp, sendWhatsAppMessage };
