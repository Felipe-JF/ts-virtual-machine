import { ExecutionUnit } from "../ExecutionUnit/ExecutionUnit.ts";
import { Opcode } from "../Instruction/Instruction.ts";
import { Stack } from "../Stack/Stack.ts";

export class Vm {
  private stack = new Stack(256);
  private executionUnit = new ExecutionUnit(this.stack);
  private program: DataView;
  private ip = 0;

  constructor(rom = new ArrayBuffer(8), private print: (data: number) => void) {
    this.program = new DataView(rom);
  }

  i8Fetch() {
    return this.program.getInt8(this.ip++);
  }
  start() {
    return this.loop();
  }
  async loop() {
    while (true) {
      await Promise.resolve();
      const opcode = this.i8Fetch();
      const halt = this.step(opcode);
      if (halt) {
        return;
      }
    }
  }

  step(opcode: Opcode): boolean {
    switch (opcode) {
      case Opcode.Halt: {
        return true;
      }
      case Opcode.Int8Push: {
        const value = this.i8Fetch();
        this.executionUnit.i8Literal(value);
        return false;
      }
      case Opcode.Print: {
        const data = this.stack.get(0);
        this.print(data);
        return false;
      }
    }
  }
}
