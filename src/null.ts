let a: undefined = undefined
// let b: null = null
// void

// amr school jekane 1 ta student jar id 1 or name Rahim
// er kono student nai

const find = (id: number): string | undefined => {
  return id === 1 ? "Rahim" : undefined
};

console.log(find(143234));

// 1=>Rahim
// ! 123123
// ! 13233
// ! 132335






type Pet = "cat" | "dog" | "owl"

const sound = (p: Pet): string => {
  switch (p) {
    case "cat": return "meow"
    case "dog": return "woof"
    case "owl": return "Oooo"
    default:
      return p
  }
  // if (p === "cat") {
  //   return "meow"
  // }
  // if (p === "dog") {
  //   return "woof"
  // }
  // if (p === "owl") {
  //   return "ooo"
  // }

  // return p
};
