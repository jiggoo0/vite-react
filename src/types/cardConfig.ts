// src/types/cardConfig.ts
/** ------------------------------
 * Base Card Configuration (shared)
 * ----------------------------- */
export interface CardConfig {
  id?: string; // Optional (for driver license)
  label?: string; // Optional (for driver license)
  cardWidth: string;
  cardHeight: string;
  bgDefault?: string;
  baseDelay?: number; // Optional (for animation delays)
}
