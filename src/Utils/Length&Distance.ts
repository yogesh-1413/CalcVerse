

export type LengthUnit =
  | "planck"
  | "nanometers"
  | "microns"
  | "millimeters"
  | "centimeters"
  | "meters"
  | "kilometers"
  | "inches"
  | "feet"
  | "yards"
  | "miles"
  | "nauticalMiles"
  | "astronomicalUnits"
  | "lightYears"
  | "parsecs";

export const lengthFactors: Record<LengthUnit, number> = {
  planck: 1.616255e-35,       
  nanometers: 1e-9,           
  microns: 1e-6,              
  millimeters: 1e-3,          
  centimeters: 1e-2,          
  meters: 1,                  
  kilometers: 1e3,            
  inches: 0.0254,             
  feet: 0.3048,               
  yards: 0.9144,              
  miles: 1609.34,             
  nauticalMiles: 1852,        
  astronomicalUnits: 1.496e11, 
  lightYears: 9.461e15,       
  parsecs: 3.086e16,          
};

export function convertLength(value: number, from: LengthUnit, to: LengthUnit): number {
  const valueInMeters = value * lengthFactors[from];
  return valueInMeters / lengthFactors[to];
}
