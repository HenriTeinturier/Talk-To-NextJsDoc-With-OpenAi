import { neon } from "@neondatabase/serverless";

export const getNeon = () => {
  const dataBaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL;

  if (!dataBaseUrl) {
    throw new Error("DATABASE_URL not set in environment variables");
  }

  const sql = neon(dataBaseUrl);

  return sql;
};
