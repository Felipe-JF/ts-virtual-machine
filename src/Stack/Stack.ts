export class Stack {
  private array: Int32Array;
  private top = 0;

  constructor(capacity: number) {
    this.array = new Int32Array(capacity);
  }

  push(value: number) {
    if (value > 0xffff) {
      throw new RangeError(`Cannot push value ${value} because it is not i32`);
    }
    this.array[this.top++] = value;
  }

  pop() {
    return this.array[--this.top];
  }

  get(relative: number) {
    return this.array[this.top - 1 - relative];
  }

  set(relative: number, value: number) {
    if (value > 0xffff) {
      throw new RangeError(`Cannot set value ${value} because it is not i32`);
    }
    this.array[this.top - 1 - relative] = value;
  }
}
