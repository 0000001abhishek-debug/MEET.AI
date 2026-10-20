
require("dotenv").config();

const { neon } = require("@neondatabase/serverless");

async function main() {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`SELECT 1 AS connected`;
    console.log("DB connected:", result);
  } catch (error) {
    console.error("Error:", error.message);
    console.error("Cause:", error.cause);
  }
}

main();
