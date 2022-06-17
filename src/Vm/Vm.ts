import { ExecutionUnit } from "../ExecutionUnit/ExecutionUnit.ts";

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
}
