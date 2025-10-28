import { Router } from "express";
import { pool } from "../db.js";
export const router = Router();

router.get("/", async (_, res) => {
  const [rows] = await pool.query("SELECT id,name,email FROM users");
  res.json(rows);
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  const [r] = await pool.query("INSERT INTO users(name,email) VALUES(?,?)", [
    name,
    email,
  ]);
  const [[row]] = await pool.query(
    "SELECT id,name,email FROM users WHERE id=?",
    [r.insertId]
  );
  res.status(201).json(row);
});
