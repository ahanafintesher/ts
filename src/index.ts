let heroName: String = "Spider Man";
let power: number = 20000;
let canFly: boolean = true;
let snacks: string[] = ["popcorn", "chips"];

type Grade = "B" | "C" | "D";

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
  className: "Ahanaf",
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

type BkashPay = {
  method: "Bkash";
  number: number;
};

type CardPay = {
  method: "card";
  cardNo: number;
  expDate: string;
  cvc: string | null | number;
};

type CashPay = {
  method: "cash";
};

type NagadPay = {
  method: "Nagad";
  number: number;
};

type Payment = BkashPay | CardPay | CashPay | NagadPay;

const pay = (p: Payment): void => {
  if (p.method === "Bkash") {
    console.log(`Send to Bkash Number ${p.number}`);
  }

  if (p.method === "card") {
    console.log(`Card No: `);
  }
};
