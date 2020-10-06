module.exports = {
  boxAppSettings: {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    appAuth: {
      publicKeyID: process.env.PUBLIC_KEY,
      privateKey: process.env.PRIVATE_KEY,
      passphrase: process.env.PASSPHRASE,
    },
  },
  enterpriseID: process.env.ENTERPRISE_ID,
};
