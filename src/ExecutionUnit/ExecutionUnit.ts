import { Stack } from "../Stack/Stack.ts";

export class ExecutionUnit {
  constructor(private stack = new Stack(8)) {
  }

  i8Literal(value: number) {
    if (value > 0xff) {
      throw new RangeError("");
    }
    this.stack.push(value);
    return this;
  }
}
