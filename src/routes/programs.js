import { Router } from "express";
import { pool } from "../db.js";
export const router = Router();

router.get("/", async (_, res) => {
  const [rows] = await pool.query("SELECT * FROM programs");
  res.json(rows);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const [[program]] = await pool.query("SELECT * FROM programs WHERE id=?", [
    id,
  ]);
  if (!program) return res.status(404).json({ message: "not found" });
  const [modules] = await pool.query(
    "SELECT * FROM modules WHERE program_id=?",
    [id]
  );
  const [courses] = await pool.query(
    "SELECT * FROM online_courses WHERE program_id=?",
    [id]
  );
  const [certs] = await pool.query(
    "SELECT * FROM certifications WHERE program_id=?",
    [id]
  );
  res.json({ program, modules, courses, certifications: certs });
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const [r] = await pool.query(
    "INSERT INTO programs (title,description) VALUES (?,?)",
    [title, description]
  );
  const [[created]] = await pool.query("SELECT * FROM programs WHERE id=?", [
    r.insertId,
  ]);
  res.status(201).json(created);
});

router.put("/:id", async (req, res) => {
  const { title, description } = req.body;
  await pool.query("UPDATE programs SET title=?, description=? WHERE id=?", [
    title,
    description,
    req.params.id,
  ]);
  const [[row]] = await pool.query("SELECT * FROM programs WHERE id=?", [
    req.params.id,
  ]);
  res.json(row);
});

router.delete("/:id", async (req, res) => {
  await pool.query("DELETE FROM programs WHERE id=?", [req.params.id]);
  res.status(204).end();
});
