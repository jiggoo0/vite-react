// src/api/echo.ts
import type { Request, Response } from "express";
import { z } from "zod";

// --- Request body schema ---
// keyType = string, valueType = unknown
const echoSchema = z.record(z.string(), z.unknown());

/**
 * POST /api/echo
 * รับ JSON body แล้วส่งกลับ
 */
export const echoBody = (req: Request, res: Response) => {
  const parseResult = echoSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({
      error: "Invalid request body",
      details: parseResult.error.format(),
    });
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("Received body:", req.body);
  }

  return res.json({ received: parseResult.data });
};
