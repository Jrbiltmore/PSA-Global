
// config.js - JavaScript file

module.exports = {
    secretKey: process.env.SECRET_KEY || 'your_secret_key',
    databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/yourdatabase',
    port: process.env.PORT || 3000,
    encryptionKey: process.env.ENCRYPTION_KEY || 'your_encryption_key'
};
