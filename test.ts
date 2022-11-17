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
    return Array.from(this.set.values())[random];
  }
}

const tester = new Test();

for (let i = 0; i < 100; i++) {
  tester.insertValue(i);
}

// for (let i = 0; i < 100; i += 2) {
//   tester.removeValue(i);
// }

// console.log(tester.getSet());
for (let i = 0; i < 100; i++) {
  console.log(tester.getRandomValue());
}
