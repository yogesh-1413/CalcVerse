// Import JSON (works in ES modules)
import data from "./currency_data.json" assert { type: "json" };

let INR = 5; // amount in INR you want to convert

// Get rates
let usdRate = data.data.USD;   // always 1
let eurRate = data.data.EUR;   // 0.85...
let inrRate = data.data.INR;   // 88.25...

// Convert INR → USD
let usdValue = INR / inrRate;

// Convert USD → EUR
let eurValue = usdValue * eurRate;

console.log(`${INR} INR = ${eurValue.toFixed(2)} EUR`);
