const crypto = require('crypto');
const fs = require('fs');

const encryptionKey = process.env.ENCRYPTION_PASSWORD
const encryptionType = process.env.ENCRYPTION_TYPE
// Encryption function
function encrypt(buffer) {
    // Generate a random IV
    const iv = crypto.randomBytes(16);

    // Create a hash of the plaintext data
    const hash = crypto.createHash('sha256').update(buffer).digest();

    // Encrypt the plaintext data
    const cipher = crypto.createCipheriv(encryptionType, Buffer.from(encryptionKey), iv);
    const encryptedBuffer = Buffer.concat([cipher.update(buffer), cipher.final()]);

    // Concatenate IV, encrypted data, and hash
    return Buffer.concat([iv, encryptedBuffer, hash]);
}

module.exports = encrypt;