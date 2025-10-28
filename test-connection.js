import { pool } from './src/db.js';
import dotenv from 'dotenv';
dotenv.config();

console.log('Testing Database Connection...\n');
console.log('Configuration:');
console.log('- Host:', process.env.DB_HOST);
console.log('- User:', process.env.DB_USER);
console.log('- Database:', process.env.DB_NAME);
console.log('- Port:', process.env.PORT || 4000);

async function testConnection() {
  try {
    // Test database connection
    const connection = await pool.getConnection();
    console.log('\n✅ Database connection successful!');
    
    // Test if tables exist
    const tables = ['programs', 'modules', 'roadmaps', 'forums', 'users'];
    for (const table of tables) {
      const [rows] = await connection.query(`SHOW TABLES LIKE '${table}'`);
      if (rows.length > 0) {
        const [count] = await connection.query(`SELECT COUNT(*) as count FROM ${table}`);
        console.log(`✅ Table '${table}' exists with ${count[0].count} records`);
      } else {
        console.log(`❌ Table '${table}' does not exist`);
      }
    }
    
    connection.release();
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Connection Error:', error.message);
    console.error('Error details:', error);
    process.exit(1);
  }
}

testConnection();
