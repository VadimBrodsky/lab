console.log('TypeScript');

// Basic data types
let kingAlive: boolean = true;
let yearsOfSummer: number = 20;
let nameOfKing: string = 'Robert Baratheon';

// Any type
let whiteWalkersAre: any = 23;
whiteWalkersAre = 'Beyond the wall';
whiteWalkersAre = false;

// Collection, typed arrays
let troops: number[] = [123, 124, 331];
let kings: string[] = ['Jofferey', 'Stannis', 'Rob'];
let brothers: Array<string> = ['Rob', 'Brandon', 'Rikon', 'Jon'];

// Enumerations
enum Houses {Stark, Lannister, Baratheon};
let alliance: Houses = Houses.Stark;

// void for nothing
function nothingReturns(): void {
  console.log('only side effects');
}

// functions
const attack = (dps: number): number => { return dps * 1000 };
function defend(hp: number): number {
  return hp - 1000;
}

// interfaces
interface King {
  name: string;   // property
  age?: number;  // optional property with ?
  rule(): void;  // function
}

const kingInTheNorth: King = {
  name: 'Rob Stark',
  rule: () => {},
}

// interface for a function type
interface SearchFunc {
  (source: string, substring: string): boolean;
}

// only parameter types are important not the names
const mySearch: SearchFunc = function(src: string, sub: string): boolean {
  return src.search(sub) != -1;
}


