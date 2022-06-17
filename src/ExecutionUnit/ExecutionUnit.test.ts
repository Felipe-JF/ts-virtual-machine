import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.144.0/testing/asserts.ts";
import { Stack } from "../Stack/Stack.ts";
import { ExecutionUnit } from "./ExecutionUnit.ts";

Deno.test("ExecutionUnit", () => {
  const stack = new Stack(8);
  const executionUnit = new ExecutionUnit(stack);
  executionUnit.i8Literal(42); //[42]
  assertEquals(stack.get(0), 42);
});

Deno.test("Should add top two values from stack", () => {
  const stack = new Stack(8);
  const executionUnit = new ExecutionUnit(stack);

  executionUnit
    .i8Literal(1) //[1]
    .i8Literal(2) //[1,2]
    .add0(); //[3]

  const result = stack.get(0);
  assertEquals(result, 3);
});
