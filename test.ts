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

  console.log("asdf");
  
}

const tester2 = new Test();
