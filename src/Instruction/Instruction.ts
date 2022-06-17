export enum Opcode {
  Halt,
  INT8_PUSH,
}
export enum InstructionType {
  Literal,
  ZeroOperand,
  OneOperand,
  TwoOperand,
}

export type Instruction = Readonly<
  {
    type: InstructionType.ZeroOperand;
    opcode: Opcode.Halt;
  } | {
    type: InstructionType.Literal;
    opcode: Opcode.INT8_PUSH;
    literal: {
      data: number;
      byteLength: 1;
    };
  }
>;
export const Instruction = { Halt, Int8Push };

export function Halt(): Instruction {
  return {
    type: InstructionType.ZeroOperand,
    opcode: Opcode.Halt,
  };
}

export function Int8Push(value: number): Instruction {
  if (value > 0xff) {
    throw new Error("");
  }
  return {
    type: InstructionType.Literal,
    opcode: Opcode.INT8_PUSH,
    literal: {
      data: value,
      byteLength: 1,
    },
  };
}
