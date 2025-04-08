import mysql from 'mysql2';

export const pool = mysql.createPool({
    host: 'localhost',      // Default local server
    user: 'root',          // Default MySQL username
    password: '12345678',          // Default password (empty for root on local)
    database: 'whatsapp',  // Replace with your database name
    port: 3306,           // Default MySQL port
    waitForConnections: true,
    connectionLimit: 10
}).promise();

const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Database connected successfully');
        connection.release();
        return true;
    } catch (error:any) {
        console.error('Error connecting to the database:', error.message);
        return false;
    }
}

// Test the connection
testConnection();

export default pool;