import { Router } from "express";
import { pool } from "../db.js";
export const router = Router();

router.post("/", async (req, res) => {
  const { post_id, user_id, content } = req.body;
  const [r] = await pool.query(
    "INSERT INTO comments(post_id,user_id,content) VALUES(?,?,?)",
    [post_id, user_id ?? null, content]
  );
  const [[row]] = await pool.query("SELECT * FROM comments WHERE id=?", [
    r.insertId,
  ]);
  res.status(201).json(row);
});
