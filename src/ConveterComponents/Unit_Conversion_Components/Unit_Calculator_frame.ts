export type CalculatorCategory =
  | 'time'
  | 'area'
  | 'speed'
  | 'temperature'
  | 'pressure'
  | 'length'
  | 'mass'
  | 'fuel'
  | 'acceleration'
  | 'data';

export interface Unit {
  name: string;
  symbol: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

export interface CalculatorConfig {
  category: CalculatorCategory;
  title: string;
  units: Unit[];
}
