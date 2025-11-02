import { Router } from "express";
// 1. Ganti import pool dengan prisma
import prisma from "../lib/prisma.js";
export const router = Router();

// GET /api/programs
router.get("/", async (_, res) => {
  try {
    // 2. Ganti kueri SQL dengan sintaks Prisma
    const programs = await prisma.programs.findMany();
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching programs", error: error.message });
  }
});

// GET /api/programs/:id
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id); // Pastikan ID adalah angka

    // 3. Ganti kueri SQL dengan sintaks Prisma
    const program = await prisma.programs.findUnique({
      where: { id: id },
      // 4. Gunakan 'include' untuk mendapatkan data terkait (relasi)
      include: {
        modules: true,
        onlineCourses: true,
        certifications: true,
      },
    });

    if (!program) {
      return res.status(404).json({ message: "not found" });
    }

    // 5. Sesuaikan struktur respons jika perlu
    res.json({
      program: program,
      modules: program.modules,
      courses: program.onlineCourses,
      certifications: program.certifications,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching program detail", error: error.message });
  }
});

// POST /api/programs
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    // 6. Ganti kueri SQL dengan sintaks Prisma
    const created = await prisma.programs.create({
      data: {
        title: title,
        description: description,
      },
    });
    res.status(201).json(created);
  } catch (error)
    res.status(500).json({ message: "Error creating program", error: error.message });
  }
});

// ... (dan seterusnya untuk PUT dan DELETE) ...
