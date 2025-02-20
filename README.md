# TypeScript Type Inference Gotcha: Implicit and Explicit Type Assertions

This repository demonstrates a common, yet subtle, issue related to type inference in TypeScript.  The problem arises when performing operations on variables with potentially mixed types, particularly when type guards or type assertions are involved.

## The Problem
The core issue revolves around TypeScript's type inference capabilities. In scenarios where a variable might hold values of different types, TypeScript tries to be conservative by inferring a union type. This is where errors can easily creep in, especially if you're performing operations that aren't compatible with all types in the union.

## The Solution
Explicit type assertions are a robust tool to address this. Explicitly specify the type when you know more about the context of the type, ensuring type compatibility for operations. If type assertion is not used, the compiler throws an error because implicit type inference does not help with union types.