import {
  assertEquals,
  assertObjectMatch,
} from "https://deno.land/std@0.144.0/testing/asserts.ts";
import { createProgram } from "../Assembler/createProgram.ts";
import { Instruction } from "../Instruction/Instruction.ts";
import { Vm } from "./Vm.ts";

Deno.test("Vm should fetch an int8", () => {
  const rom = new ArrayBuffer(8);
  const program = new DataView(rom);
  program.setInt8(0, 42);
  const vm = new Vm(rom, console.log);
  const value = vm.i8Fetch();
  assertEquals(value, 42);
});

Deno.test("Should print a number", async () => {
  const outputs: number[] = [];
  function stdOut(data: number) {
    outputs.push(data);
  }
  const rom = createProgram([
    Instruction.Int8Push(42),
    Instruction.StdOut(),
    Instruction.Halt(),
  ]);
  const vm = new Vm(rom, stdOut);
  await vm.start();
  assertObjectMatch({ outputs }, { outputs: [42] });
});
