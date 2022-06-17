import { assertEquals } from "https://deno.land/std@0.144.0/testing/asserts.ts";
import { Vm } from "./Vm.ts";

Deno.test("Vm should fetch an int8", () => {
  const rom = new ArrayBuffer(8);
  const program = new DataView(rom);
  program.setInt8(0, 42);
  const vm = new Vm(rom);
  const value = vm.i8Fetch();
  assertEquals(value, 42);
});
