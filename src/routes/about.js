import { Router } from "express";
import { pool } from "../db.js";
export const router = Router();

router.get("/", async (_, res) => {
  const [r] = await pool.query("SELECT * FROM about_us LIMIT 1");
  res.json(r[0] || null);
});

router.put("/", async (req, res) => {
  const { name, photo, bio, history, social_links } = req.body;
  await pool.query(
    `UPDATE about_us SET name=?, photo=?, bio=?, history=?, social_links=? WHERE id=(SELECT id FROM (SELECT id FROM about_us LIMIT 1) t)`,
    [name, photo, bio, history, social_links]
  );
  const [r] = await pool.query("SELECT * FROM about_us LIMIT 1");
  res.json(r[0]);
});
