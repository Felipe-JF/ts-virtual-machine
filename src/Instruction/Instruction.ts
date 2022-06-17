export enum Opcode {
  Halt,
  Int8Push,
  Print,
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
    opcode: Opcode.Int8Push;
    literal: {
      data: number;
      byteLength: 1;
    };
  } | {
    type: InstructionType.ZeroOperand;
    opcode: Opcode.Print;
  }
>;
export const Instruction = { Halt, Int8Push, Print };

function Halt(): Instruction {
  return {
    type: InstructionType.ZeroOperand,
    opcode: Opcode.Halt,
  };
}

function Int8Push(value: number): Instruction {
  if (value > 0xff) {
    throw new Error("");
  }
  return {
    type: InstructionType.Literal,
    opcode: Opcode.Int8Push,
    literal: {
      data: value,
      byteLength: 1,
    },
  };
}

function Print(): Instruction {
  return {
    type: InstructionType.ZeroOperand,
    opcode: Opcode.Print,
  };
}
