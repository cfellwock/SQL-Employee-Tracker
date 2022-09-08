require('dotenv').config()
const mysql = require('mysql2');
const { DB_HOST, DB_USER, DB_PASSWORD} = process.env

// async function connect() {
//     try { 
//         const connection = await mysql.createConnection({
//             host: DB_HOST,
//             port: DB_PORT,
//             user: DB_USER,
//             password: DB_PASSWORD,
//             database: DB_SCHEMA
//         });

//         return connection;
//     } catch (err) {
//         console.error(chalk.red(err));
//         throw new Error("Unable to connect to database");
//     }
// }

// Connect to database
const db = mysql.createConnection(
    {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: "company_db"
    },
    console.log(`Connected to the classlist_db database.`)
  );

module.exports = db