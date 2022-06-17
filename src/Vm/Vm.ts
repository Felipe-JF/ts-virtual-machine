import { ExecutionUnit } from "../ExecutionUnit/ExecutionUnit.ts";
import { Opcode } from "../Instruction/Instruction.ts";

export class Vm {
  private executionUnit = new ExecutionUnit();
  private program: DataView;
  private ip = 0;

  constructor(rom = new ArrayBuffer(8)) {
    this.program = new DataView(rom);
  }

  i8Fetch() {
    return this.program.getInt8(this.ip++);
  }

  step(opcode: Opcode): boolean {
    switch (opcode) {
      case Opcode.Halt: {
        return true;
      }
      case Opcode.INT8_PUSH: {
        const value = this.i8Fetch();
        this.executionUnit.i8Literal(value);
        return false;
      }
    }
  }
}
