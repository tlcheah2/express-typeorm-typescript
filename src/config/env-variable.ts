import dotnev from "dotenv";
dotnev.config();

export const PORT = process.env.PORT || 3000;

// Database config
export const DATABASE_HOST = process.env.DATABASE_HOST ?? "";
export const DATABASE_PORT = Number(process.env.DATABASE_PORT) ?? 5432;
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME ?? "";
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD ?? "";
export const DATABASE_NAME = process.env.DATABASE_NAME ?? "";
