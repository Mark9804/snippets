const stamps = {
  205: 30,
  82: 40,
  30: 10,
}

const allVal = new Set();
allVal.add(0);

const max = 205 * 30 + 82 * 40 + 30 * 10;

for (const [stamp, num] of Object.entries(stamps)) {
  const curr = Array.from(allVal)
  for (const val of curr) {
    for (let i = 1; i <= num; i++) {
      const newVal = val + stamp * i;
      if (newVal <= max) {
        allVal.add(newVal);
      }
    }
  }
}

console.log(allVal.size - 1); // 0