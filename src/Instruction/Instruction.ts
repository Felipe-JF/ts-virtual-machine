export enum Opcode {
  Halt,
  Int8Push,
  StdOut0,
  Add0,
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
    opcode: Opcode.Halt | Opcode.StdOut0 | Opcode.Add0;
  } | {
    type: InstructionType.Literal;
    opcode: Opcode.Int8Push;
    literal: {
      data: number;
      byteLength: 1;
    };
  }
>;
export const Instruction = { Halt, Int8Push, StdOut0, Add0 };

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

function StdOut0(): Instruction {
  return {
    type: InstructionType.ZeroOperand,
    opcode: Opcode.StdOut0,
  };
}

function Add0(): Instruction {
  return {
    type: InstructionType.ZeroOperand,
    opcode: Opcode.Add0,
  };
}
