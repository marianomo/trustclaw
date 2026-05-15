import { z } from "zod";

export const ALLOWED_ANTHROPIC_MODELS = [
  "claude-sonnet-4-5-20250929",
  "claude-opus-4-6",
  "claude-haiku-4-5-20251001",
  "google/gemini-2.0-flash",
  "google/gemini-2.5-flash-preview-04-17",
] as const;

export const allowedAnthropicModelSchema = z.enum(ALLOWED_ANTHROPIC_MODELS);

export const createInstanceInput = z.object({
  anthropicModel: allowedAnthropicModelSchema.default(
    "claude-sonnet-4-5-20250929",
  ),
});

export type CreateInstanceInput = z.infer<typeof createInstanceInput>;
