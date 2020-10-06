/* eslint-disable camelcase */
const BoxSDK = require('box-node-sdk');

const sdk = new BoxSDK({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  appAuth: {
    keyID: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
    passphrase: process.env.PASSPHRASE,
  },
});

// const fs = require('fs');

// function readJsonFile() {
//   try {
//     return fs.readFileSync('./config.json');
//   } catch (e) {
//     throw new Error(e);
//   }
// }
// const sdk = BoxSDK.getPreconfiguredInstance('./config.js');

// Get the service account client, used to create and manage app user accounts
const client = sdk.getAppAuthClient('enterprise', process.env.ENTERPRISE_ID);

/**
 * upload single file
 *
 * @function
 * @returns {json} json object with uploaded file data
 * @param file
 * @param path
 */
export async function uploadBoxFile(file, path) {
  try {
    const uploadedFile = await client.files.uploadFile(process.env.PARENT_FOLDER_ID, file, path);
    return await client.files.update(uploadedFile.entries[0].id, {
      shared_link: {
        access: 'open',
        permissions: {
          can_download: true,
        },
      },
    });
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * delete single file
 *
 * @function
 * @returns {json} null
 * @param file_id
 */
export async function deleteBoxFile(file_id) {
  try {
    return client.files.delete(file_id);
  } catch (e) {
    throw new Error(e);
  }
}
