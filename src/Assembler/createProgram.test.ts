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
