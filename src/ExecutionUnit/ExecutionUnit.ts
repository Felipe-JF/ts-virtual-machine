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

  add0() {
    return this.alu0(add);
  }

  decrement0() {
    return this.unary0(decrement);
  }

  private unary0(fn: (a: number) => number) {
    this.stack.push(fn(this.stack.pop()));
    return this;
  }

  private alu0(fn: (a: number, b: number) => number) {
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(fn(a, b));
    return this;
  }
}

function add(a: number, b: number) {
  return a + b;
}

function decrement(a: number) {
  return a - 1;
}
