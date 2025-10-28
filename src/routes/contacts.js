import { Router } from "express";
import { pool } from "../db.js";
export const router = Router();

router.get("/", async (_, res) => {
  const [r] = await pool.query("SELECT * FROM contacts LIMIT 1");
  res.json(r[0] || null);
});

router.put("/", async (req, res) => {
  const { phone, whatsapp, email } = req.body;
  await pool.query(
    `UPDATE contacts SET phone=?, whatsapp=?, email=? WHERE id=(SELECT id FROM (SELECT id FROM contacts LIMIT 1) t)`,
    [phone, whatsapp, email]
  );
  const [r] = await pool.query("SELECT * FROM contacts LIMIT 1");
  res.json(r[0]);
});
