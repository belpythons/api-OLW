import { Router } from "express";
import { pool } from "../db.js";
export const router = Router();

router.get("/", async (_, res) => {
  const [rows] = await pool.query("SELECT * FROM forums");
  res.json(rows);
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const [r] = await pool.query(
    "INSERT INTO forums(title,description) VALUES(?,?)",
    [title, description]
  );
  const [[row]] = await pool.query("SELECT * FROM forums WHERE id=?", [
    r.insertId,
  ]);
  res.status(201).json(row);
});
