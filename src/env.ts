import { z } from "zod";

const envSchema = z.object({
  BACKEND_API: z.string().url(),
  NEXT_PUBLIC_BACKEND_API: z.string().url(),

  
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

// Validate the environment variables
const _env = envSchema.safeParse({
  BACKEND_API: process.env.BACKEND_API,
  NEXT_PUBLIC_BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API,
  NODE_ENV: process.env.NODE_ENV,
});

if (!_env.success) {
  console.error(" Invalid environment variables:", _env.error.format());
  throw new Error("Invalid environment variables");
}

export const env_var = _env.data;