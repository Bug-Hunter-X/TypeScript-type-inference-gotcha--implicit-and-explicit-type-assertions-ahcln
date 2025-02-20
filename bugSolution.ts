function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

console.log(result1, result2); // Outputs 8, 6

// Adding a type assertion to resolve the type ambiguity
let result3 = add(result1, Number("2"));

console.log(result3); //Outputs 10

// Alternative solution with explicit type casting
let result4: number = add(result1, parseInt("2"));
console.log(result4); // Outputs 10