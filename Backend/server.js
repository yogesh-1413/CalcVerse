import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { fetchCurrencyData } from "./calculator.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the React build folder
app.use(express.static(path.join(__dirname, "../dist")));

// Currency update endpoint
app.get("/update", async (_req, res) => {
  await fetchCurrencyData();
  res.json({ message: "✅ Currency data updated!" });
});
// ✅ Works with Express v5
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.use((req, res) => {
  res.status(404).send("Page doesn’t exist");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
