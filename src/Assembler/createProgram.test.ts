import {
  assertEquals,
  assertObjectMatch,
} from "https://deno.land/std@0.144.0/testing/asserts.ts";
import { Instruction, Opcode } from "../Instruction/Instruction.ts";
import { dataViewToArray } from "./dataViewToArray.ts";
import { createProgram } from "./createProgram.ts";

Deno.test("Should create a Halt Program", () => {
  const buffer = createProgram([
    Instruction.Halt(),
  ]);

  const instructions = dataViewToArray(new DataView(buffer));

  assertEquals(buffer.byteLength, 1);
  assertObjectMatch({
    instructions,
  }, {
    instructions: [Opcode.Halt],
  });
});

Deno.test("Should have Int8Push Opcode and 0x42", () => {
  const buffer = createProgram([
    Instruction.Int8Push(0x42),
  ]);

  const instructions = dataViewToArray(new DataView(buffer));

  assertEquals(buffer.byteLength, 2);
  assertObjectMatch({
    instructions,
  }, {
    instructions: [Opcode.Int8Push, 0x42],
  });
});

Deno.test("Should have Print Opcode", () => {
  const buffer = createProgram([
    Instruction.StdOut0(),
  ]);

  const instructions = dataViewToArray(new DataView(buffer));

  assertEquals(buffer.byteLength, 1);
  assertObjectMatch({
    instructions,
  }, {
    instructions: [Opcode.StdOut0],
  });
});

Deno.test("Should make a program that print a Int8", () => {
  const buffer = createProgram([
    Instruction.Int8Push(0x42),
    Instruction.StdOut0(),
    Instruction.Halt(),
  ]);

  const instructions = dataViewToArray(new DataView(buffer));

  assertEquals(buffer.byteLength, 4);
  assertObjectMatch({
    instructions,
  }, {
    instructions: [Opcode.Int8Push, 0x42, Opcode.StdOut0, Opcode.Halt],
  });
});
