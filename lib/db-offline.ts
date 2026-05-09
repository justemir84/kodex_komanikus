import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import * as schema from "../drizzle/offline-schema";

// Helper to open database safely
const getDb = () => {
  try {
    return openDatabaseSync("study_app.db");
  } catch (e) {
    console.error("[OfflineDB] Failed to open database:", e);
    // Fallback or rethrow depending on app needs
    throw e;
  }
};

export const db = drizzle(getDb(), { schema });

/**
 * Initialize database and run any necessary setup.
 * This is called during app startup in RootLayout.
 */
export async function initOfflineDb() {
  try {
    // In a real app, you'd use drizzle-kit migrations
    // For now, we just ensure the connection is established
    console.log("[OfflineDB] Initializing...");
    
    // Example: You could run a simple query to test connection
    // await db.select().from(schema.someTable).limit(1);
    
    console.log("[OfflineDB] Successfully initialized");
  } catch (e) {
    console.error("[OfflineDB] Initialization error:", e);
    // We don't rethrow here to allow the app to start even if DB fails
    // (though features depending on DB will fail later)
  }
}
