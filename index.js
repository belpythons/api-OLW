import express from "express";
import cors from "cors";
import serverless from "serverless-http";

import { router as about } from "./src/routes/about.js";
import { router as contacts } from "./src/routes/contacts.js";
import { router as programs } from "./src/routes/programs.js";
import { router as forums } from "./src/routes/forums.js";
import { router as posts } from "./src/routes/posts.js";
import { router as comments } from "./src/routes/comments.js";
import { router as documentaries } from "./src/routes/documentaries.js";
import { router as roadmaps } from "./src/routes/roadmap.js";
import { router as community } from "./src/routes/community.js";
import { router as users } from "./src/routes/users.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/about", about);
app.use("/api/contacts", contacts);
app.use("/api/programs", programs);
app.use("/api/forums", forums);
app.use("/api/posts", posts);
app.use("/api/comments", comments);
app.use("/api/documentaries", documentaries);
app.use("/api/roadmaps", roadmaps);
app.use("/api/community", community);
app.use("/api/users", users);

app.get("/api/health", (_, res) => res.json({ ok: true }));

export const handler = serverless(app);
