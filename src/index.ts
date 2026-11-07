let heroName: String = "Spider Man";
let power: number = 20000;
let canFly: boolean = true;
let snacks: string[] = ["popcorn", "chips"];

type Grade = "A" | "B" | "C" | "D";

let g: Grade = "A";

type Student = {
  id: number;
  readonly name: string;
  age: number;
  roll: number;
  className?: String;
};

const s1: Student = {
  id: 1,
  age: 25,
  name: "Ahanaf",
  roll: 17,
  className: "Ten",
};

type hasName = { name: string };
type hasRoll = { roll: number };
type hasFee = { fee: number };

type FullStudent = hasName & hasRoll & hasFee & { grade: Grade };

const fullS: FullStudent = {
  name: "",
  roll: 5,
  fee: 500,
  grade: "B",
};

type BkashPay = { method: "Bkash"; number: number };
type NagadPay = { method: "Nagad"; number: number };
type CardPay = {
  method: "card";
  cardNo: number;
  expDate: string;
  cvc: string | number | null;
};
type CashPay = { method: "cash" };

type Payment = BkashPay | NagadPay | CardPay | CashPay;

const pay = (p: Payment): void => {
  switch (p.method) {
    case "Bkash":
      console.log(`Send to Bkash Number: ${p.number}`);
      break;
    case "Nagad":
      console.log(`Send to Nagad Number: ${p.number}`);
      break;
    case "card":
      console.log(`Card No: ${p.cardNo}`);
      break;
    case "cash":
      console.log("Payment Done!!!");
      break;
    default: {
      const _exhaustive: never = p;
      return _exhaustive;
    }
  }
};

const greet = (
  name: string,
  greeting: string = "Hello",
  suffix?: string,
): string => {
  return `${greeting}, ${name}${suffix ?? ""}`;
};

console.log(greet("Ahanaf"));
console.log(greet("Ahanaf", "Hi", "!!!"));

type MathOp = (a: number, b: number) => number;

const calculate = (a: number, b: number, Op: MathOp): number => Op(a, b);

console.log(calculate(5, 3, (x, y) => x + y));
console.log(calculate(5, 3, (x, y) => x + y));

function format(value: string): string;

function format(value: number): string;

function format(value: string | number): string {
  return typeof value === "string" ? value.toUpperCase() : value.toFixed(2);
}

console.log(format("Hello"));
console.log(format(3.1416));
