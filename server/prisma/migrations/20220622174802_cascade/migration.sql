-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_lendings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client_id" TEXT NOT NULL,
    "lending_value" DECIMAL NOT NULL,
    "fee" DECIMAL NOT NULL,
    "parcels" DECIMAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "lendings_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_lendings" ("client_id", "created_at", "fee", "id", "lending_value", "parcels") SELECT "client_id", "created_at", "fee", "id", "lending_value", "parcels" FROM "lendings";
DROP TABLE "lendings";
ALTER TABLE "new_lendings" RENAME TO "lendings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
