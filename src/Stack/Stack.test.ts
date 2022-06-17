import {
  assertEquals,
  assertObjectMatch,
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

Deno.test("Stack should get a value", () => {
  const stack = new Stack(8);
  stack.push(42);
  const value = stack.get(0);
  assertEquals(value, 42);
});

Deno.test("Stack should set a value", () => {
  const stack = new Stack(8);
  stack.push(42);
  stack.set(0, 24);
  const value = stack.get(0);
  assertEquals(value, 24);
});

Deno.test("Stack should get top items", () => {
  const stack = new Stack(8);
  stack.push(42);
  stack.push(24);
  const value = stack.getTopItems(2);
  assertObjectMatch({ value }, { value: [42, 24] });
});
