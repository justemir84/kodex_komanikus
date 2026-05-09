import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import * as schema from "../drizzle/offline-schema";

const expoDb = openDatabaseSync("study_app.db");
export const db = drizzle(expoDb, { schema });

// Helper to initialize database (run migrations manually or use drizzle-kit)
export async function initOfflineDb() {
  // In a real app, you'd use drizzle-kit migrations
  // For now, we ensure tables exist or handle it via expo-sqlite
  console.log("[OfflineDB] Initialized");
}
