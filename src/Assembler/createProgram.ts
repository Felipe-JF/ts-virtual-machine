import { Instruction, InstructionType } from "../Instruction/Instruction.ts";

export function createProgram(instructions: Instruction[]): ArrayBuffer {
  const byteLength = programByteLength(instructions);

  const program = new DataView(new ArrayBuffer(byteLength));
  let pointer = 0;
  for (const instruction of instructions) {
    switch (instruction.type) {
      case InstructionType.Literal: {
        switch (instruction.literal.byteLength) {
          case 1: {
            program.setUint8(pointer++, instruction.opcode);
            program.setInt8(pointer, instruction.literal.data);
            pointer += instruction.literal.byteLength;
            break;
          }
        }
        break;
      }
      case InstructionType.ZeroOperand: {
        program.setUint8(pointer++, instruction.opcode);
        break;
      }
    }
  }
  return program.buffer;
}

function programByteLength(instructions: Instruction[]) {
  return instructions.reduce((byteLength, instruction) => {
    switch (instruction.type) {
      case InstructionType.Literal: {
        return byteLength + 1 + instruction.literal.byteLength;
      }
      case InstructionType.ZeroOperand: {
        return byteLength + 1;
      }
    }
  }, 0);
}
