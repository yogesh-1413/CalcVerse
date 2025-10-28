import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { fetchCurrencyData } from "./calculator.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the built frontend (Vite's dist folder)
app.use(express.static(path.join(__dirname, "../dist")));

// API route to manually trigger data refresh
app.get("/update", async (_req, res) => {
  await fetchCurrencyData();
  res.json({ message: "✅ Currency data updated!" });
});

app.get("/", (_req, res) => {
  res.send("✅ Currency updater server is running!");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
