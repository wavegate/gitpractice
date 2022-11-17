class Test {
  private set: Set<number>;

  constructor() {
    this.set = new Set();
  }

  getSet() {
    return this.set;
  }

  insertValue(value: number) {
    this.set.add(value);
  }

  removeValue(value: number) {
    this.set.delete(value);
  }

  getRandomValue() {
    const random = Math.floor(Math.random() * this.set.size);
    // return Array.from(this.set.values())[random];
  }
}

const tester2 = new Test();
