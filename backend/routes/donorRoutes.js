const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/register", (req, res) => {
  const { name, email, bloodGroup, phone, password } = req.body;

  const sql = `INSERT INTO donors (name, email, blood_group, phone, password) VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [name, email, bloodGroup, phone, password], (err, result) => {
    if (err) {
      return res.json({ message: "Registration Failed", error: err });
    }
    res.json({ message: "✅ Donor Registered Successfully!" });
  });
});

module.exports = router;
