import dbPromise from "../config/database.js";

const initDatabase = async () => {
    const db = await dbPromise;

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fullName TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);

    console.log("✅ Users table created successfully!");
};

initDatabase();