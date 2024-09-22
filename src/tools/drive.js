import { google } from 'googleapis';
import {config} from '../config/config.js';
import { Readable } from 'stream';


const SCOPE = ['https://www.googleapis.com/auth/drive'];

/**
 * Authorizes a Google API client using JWT (JSON Web Token).
 *
 * @async
 * @function authorize
 * @returns {Promise<google.auth.JWT>} A promise that resolves to an authorized JWT client.
 */
export const authorize = async () => {
    const jwtClient = new google.auth.JWT(
        config.googleClientId,
        null,
        config.googlePrivateKey,
        SCOPE
        // ['https://www.googleapis.com/auth/drive']
    );
    await jwtClient.authorize();
    return jwtClient;
}

/**
 * Uploads a file to Google Drive.
 *
 * @param {object} authClient - The authentication client for Google API.
 * @param {string} fileName - The name of the file to be uploaded.
 * @param {string} mimeType - The MIME type of the file.
 * @param {Buffer} imageBuffer - The buffer containing the file data.
 * @returns {Promise<string>} - A promise that resolves to the ID of the uploaded file.
 */
export const uploadFile = async (authClient, fileName, mimeType, imageBuffer) => {
    console.log('Uploading file...');
    return new Promise((resolve, reject) => {
        const drive = google.drive({ version: 'v3', auth: authClient });

        const fileMetadata = {
            name: fileName,
            parents: ['1sRzj9zQaizSIo--ksVQMJ-cfnSGn8ZT6']
        };

        const media = {
            mimeType: mimeType,
            body: Readable.from(imageBuffer) // Convierte el buffer a un flujo de lectura
        };

        drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id'
        }, (err, file) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log('File uploaded!');
                resolve(file.data.id);
            }
        });
    });
}
