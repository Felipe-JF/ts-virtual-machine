export enum Opcode {
  Halt,
  INT8_PUSH,
}

export type Instruction = Readonly<
  {
    type: Opcode.Halt;
  } | {
    type: Opcode.INT8_PUSH;
    payload: {
      data: number;
      byteLength: 1;
    };
  }
>;

export function Halt(): Instruction {
  return { type: Opcode.Halt };
}

export function Int8Push(value: number): Instruction {
  if (value > 0xff) {
    throw new Error("");
  }
  return {
    type: Opcode.INT8_PUSH,
    payload: {
      data: value,
      byteLength: 1,
    },
  };
}
