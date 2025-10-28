import dotenv from "dotenv";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import cron from "node-cron";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "./.env") });


const API_URL = process.env.CURRENCY_API;
if (!API_URL) {
  console.error("CURRENCY_API environment variable is missing!");
  process.exit(1);
}

const PUBLIC_DIR = path.resolve(__dirname, "../public");
const DATA_FILE = path.join(PUBLIC_DIR, "currency_data.json");

type CurrencyApiResponse = {
  data: Record<string, number>;
};

async function fetchCurrencyData() {
  try {
    const response = await fetch(API_URL!);
    const data = (await response.json()) as CurrencyApiResponse;

    const formattedData = {
      base: "USD",
      rates: data.data,
    };

    fs.writeFileSync(DATA_FILE, JSON.stringify(formattedData, null, 2), "utf8");
    console.log(`[${new Date().toISOString()}] Currency data updated successfully!`);
  } catch (error) {
    console.error("Error fetching currency data:", error);
  }
}


fetchCurrencyData();

cron.schedule("0 */2 * * *", fetchCurrencyData);
