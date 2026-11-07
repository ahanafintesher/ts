export type Toppings = "cheese" | "olive" | "corn"

export type Pizza = {
  name: string
  toppings: Toppings[]
}

export const menu: Pizza[] = [
  {
    name: "Pizza 1",
    toppings: ["cheese"]
  },
  {
    name: "Pizza 2",
    toppings: ["corn", "olive"]
  }
]


export const makePizza = (name: string, ...toppings: Toppings[]) => {
  return { name, toppings }
};

