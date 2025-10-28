import { Router } from "express";
import { pool } from "../db.js";
export const router = Router();

router.get("/", async (_, res) => {
  const [rows] = await pool.query(
    `SELECT p.*, u.name AS user_name, f.title AS forum_title
     FROM posts p
     LEFT JOIN users u ON u.id=p.user_id
     JOIN forums f ON f.id=p.forum_id
     ORDER BY p.id DESC`
  );
  res.json(rows);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const [[post]] = await pool.query("SELECT * FROM posts WHERE id=?", [id]);
  if (!post) return res.status(404).json({ message: "not found" });
  const [comments] = await pool.query(
    `SELECT c.*, u.name AS user_name FROM comments c
     LEFT JOIN users u ON u.id=c.user_id WHERE c.post_id=? ORDER BY c.id ASC`,
    [id]
  );
  res.json({ post, comments });
});

router.post("/", async (req, res) => {
  const { forum_id, user_id, title, content } = req.body;
  const [r] = await pool.query(
    "INSERT INTO posts(forum_id,user_id,title,content) VALUES (?,?,?,?)",
    [forum_id, user_id ?? null, title, content]
  );
  const [[row]] = await pool.query("SELECT * FROM posts WHERE id=?", [
    r.insertId,
  ]);
  res.status(201).json(row);
});
