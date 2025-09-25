export type TimeUnit =
  | "milliseconds"
  | "seconds"
  | "minutes"
  | "hours"
  | "days"
  | "weeks"
  | "months"
  | "years"
  | "decades"
  | "centuries";

export const timeFactors: Record<TimeUnit, number> = {
  milliseconds: 1,
  seconds: 1000,                  
  minutes: 1000 * 60,             
  hours: 1000 * 60 * 60,          
  days: 1000 * 60 * 60 * 24,      
  weeks: 1000 * 60 * 60 * 24 * 7, 
  months: 1000 * 60 * 60 * 24 * 30, 
  years: 1000 * 60 * 60 * 24 * 365, 
  decades: 1000 * 60 * 60 * 24 * 365 * 10,
  centuries: 1000 * 60 * 60 * 24 * 365 * 100,
};

export function convertTime(value: number, from: TimeUnit, to: TimeUnit): number {
  const valueInMs = value * timeFactors[from];
  return valueInMs / timeFactors[to];
}
