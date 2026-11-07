const fare = {
  rickshaw: 40,
  cng: 400,
  bus: 10,
  // metro: 50,
  taxi: 500,
  bike: 100,
  train: 150,
  launch: 200,
  car: 800,
};

type Vehicle = keyof typeof fare


const getFare = (v: Vehicle) => {
  return fare[v]
};


console.log(getFare("launch"));

// getFare("ricksaw") => 40
// getFare("cng") => 400
// getFare("metro") => ??
