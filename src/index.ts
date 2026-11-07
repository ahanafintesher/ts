let heroName: string = "Spider Man"
let power: number = 20000
let canFly = true
let snacks: string[] = ["popcorn", "chips"]
// ["popcorn", "chips"]

type Grade = "A" | "B" | "C" | "D"
// type id = string | number

let g: Grade = "A"

type Student = {
  id: number
  readonly name: string
  age: number
  roll: number
  className?: string
}

const s1: Student = {
  id: 1,
  age: 25,
  name: "Ruhan",
  roll: 17,
  className: "Z"
}






type hasName = { name: string }
type hasRoll = { roll: number }
type hasFee = { fee: number }


type FullStudent = hasName & hasRoll & hasFee & { grade: Grade }

const fullS: FullStudent = {
  name: "",
  roll: 5,
  fee: 500,
  grade: "B"
}



type BikashPay = { method: "bikash", number: number }
type CardPay = { method: "card", cardNo: number, expDate: string, cvc: number }
type CashPay = { method: "cash" }

type Payment = BikashPay | CardPay | CashPay

function pay(p: Payment) {
  if (p.method === "bikash") {
    console.log(`Send to bikash Number ${p.number}`);
  }
  if (p.method === "card") {
    console.log(`Card no:${p.cardNo} with ${p.cvc}`);
  }

  // console.log("play cash");
}





function greet(name: string, mood?: string, emoji = "👌") {
  console.log(`${emoji} ${name} is ${mood ?? "okay"}`);
}


