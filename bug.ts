function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

console.log(result1, result2); // Outputs 8, 6

// The following line will produce a compile-time error because TypeScript
// infers the type of 'result' to be number | string, and the addition
// operator isn't defined for number | string without explicit type assertion.
let result3 = add(result1, "2");

let result4 = add(result1, 2 as number); //No error because type assertion

console.log(result4); // Outputs 10