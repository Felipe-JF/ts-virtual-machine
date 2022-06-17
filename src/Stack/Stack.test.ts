import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.144.0/testing/asserts.ts";
import { Stack } from "./Stack.ts";

Deno.test("Stack should push a value", () => {
  const stack = new Stack(8);
  stack.push(42);
});

Deno.test("Stack should not push value bigger than i32", () => {
  const stack = new Stack(8);
  assertThrows(() => {
    stack.push(0x10000);
  });
});

Deno.test("Stack should pop a value", () => {
  const stack = new Stack(8);
  stack.push(42);
  const value = stack.pop();
  assertEquals(value, 42);
});
