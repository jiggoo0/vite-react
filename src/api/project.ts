// src/api/project.ts
import type { Request, Response } from "express";
import { z } from "zod";

// --- Response Schema ---
const projectSchema = z.object({
  name: z.string(),
  version: z.string(),
  description: z.string().optional(),
  github: z.string().url(),
  website: z.string().url(),
  developer: z.string().email(),
  vercelProjectId: z.string(),
});

// --- GET /api/project ---
export const getProjectInfo = (req: Request, res: Response) => {
  const data = {
    name: process.env.PROJECT_NAME!,
    version: process.env.VERSION!,
    description: process.env.DESCRIPTION || "N/A",
    github: process.env.GITHUB_URL!,
    website: process.env.WEBSITE_URL!,
    developer: process.env.DEVELOPER_EMAIL!,
    vercelProjectId: process.env.VERCEL_PROJECT_ID!,
  };

  const parsed = projectSchema.safeParse(data);
  if (!parsed.success) {
    return res.status(500).json({ error: "Invalid project data", details: parsed.error.format() });
  }

  res.json(parsed.data);
};

// --- POST /api/echo ---
const echoSchema = z.record(z.string(), z.any()); // <-- ปรับตรงนี้

export const echoBody = (req: Request, res: Response) => {
  const parseResult = echoSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res
      .status(400)
      .json({ error: "Invalid request body", details: parseResult.error.format() });
  }

  if (process.env.NODE_ENV !== "production") console.log("Received body:", req.body);

  res.json({ received: parseResult.data });
};
