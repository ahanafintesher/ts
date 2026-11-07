import { makePizza, menu, type Pizza } from "./pizza";

function bake(p: Pizza) {
  console.log(`🔥 ${p.name} baked with ${p.toppings}`);
}


bake(makePizza("Custom pizza", "cheese"))
