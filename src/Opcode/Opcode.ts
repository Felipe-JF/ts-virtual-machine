export enum Opcode {
  Halt,
  INT8_PUSH,
}
type Instruction = {
  opcode: Opcode.Halt;
} | {
  opcode: Opcode.INT8_PUSH;
  value: number;
};

function createHalt(): Instruction {
  return { opcode: Opcode.Halt };
}

function createInt8Push(value: number): Instruction {
  if (value > 0xff) {
    throw new Error("");
  }
  return { opcode: Opcode.INT8_PUSH, value };
}
