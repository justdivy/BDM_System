const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/new", (req, res) => {
  const {
    patientName,
    phone,
    bloodGroup,
    units,
    hospital,
    address,
    urgency
  } = req.body;

  const sql = `
    INSERT INTO donation_requests 
    (patient_name, phone, blood_group, units_required, hospital, address, urgency)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [patientName, phone, bloodGroup, units, hospital, address, urgency],
    (err, result) => {
      if (err) {
        return res.json({ message: "Request Failed", error: err });
      }
      res.json({ message: "✅ Donation Request Submitted!" });
    }
  );
});

module.exports = router;
