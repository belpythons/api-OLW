import { Router } from "express";
import { pool } from "../db.js";
export const router = Router();
router.get("/", async (_, res) => {
  const [rows] = await pool.query("SELECT * FROM community_links ORDER BY id");
  res.json(rows);
});
