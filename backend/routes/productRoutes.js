const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("API HIT");

  try {
    const result = await pool.query(
      "SELECT * FROM products"
    );

    console.log(result.rows);
    res.json({
      success: true,
      message: "NEW API",
      data: result.rows
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Database Error",
    });
  }
});

module.exports = router;

