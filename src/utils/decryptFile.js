const crypto = require('crypto');

const encryptionKey = process.env.ENCRYPTION_PASSWORD
const encryptionType = process.env.ENCRYPTION_TYPE

async function decrypt(buffer) {
    try {
        // Extract IV from the beginning of the buffer
        const iv = buffer.slice(0, 16);

        // Extract encrypted data (after the IV) and hash
        const encryptedData = buffer.slice(16, buffer.length - 32); // Exclude the last 32 bytes for the hash
        const receivedHash = buffer.slice(buffer.length - 32); // Last 32 bytes for the hash

        // Decrypt the encrypted data
        const decipher = crypto.createDecipheriv(encryptionType, Buffer.from(encryptionKey), iv);
        const decryptedBuffer = Buffer.concat([decipher.update(encryptedData), decipher.final()]);

        // Verify the integrity of the decrypted data
        const calculatedHash = crypto.createHash('sha256').update(decryptedBuffer).digest();
        if (!crypto.timingSafeEqual(receivedHash, calculatedHash)) {
            throw new Error('Hash verification failed. Data may have been tampered with.');
        }

        // return decryptedBuffer;
        return { success: true, buffer: decryptedBuffer };

    } catch (error) {
        console.error('Decryption error:', error.message);
        // throw new Error('Decryption failed.');
        return { success: false, message: 'Decryption failed' };
    }
}

module.exports = decrypt;
