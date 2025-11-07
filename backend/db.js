const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Divy@8115",
    database: "bdmsy"
});

db.connect((err) => {
  if (err) {
    console.log("DB Connection Error:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

module.exports = db;
