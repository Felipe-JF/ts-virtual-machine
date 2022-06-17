import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.144.0/testing/asserts.ts";
import { Stack } from "../Stack/Stack.ts";
import { ExecutionUnit } from "./ExecutionUnit.ts";

Deno.test("ExecutionUnit", () => {
  const stack = new Stack(8);
  const executionUnit = new ExecutionUnit(stack);
  executionUnit.i8Literal(42);
  assertEquals(stack.get(0), 42);
});
