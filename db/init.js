const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const FILENAME = 'db/db.sqlite'; 

// Delete existing database file
if(process.argv.includes('-d')) {
    fs.rmSync(FILENAME);
}

const sql = fs.readFileSync('./db/models.sql').toString();
const db = new sqlite3.Database(FILENAME);
db.run(sql);
db.close();