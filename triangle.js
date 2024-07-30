const list = [];
const lim = 8000;

for (let a = 1; a <= lim; a++) {
  for (let b = a; b <= lim; b++) {
    const c = Math.sqrt(a * a + b * b);
    if (!Number.isInteger(c)) continue;
    if (a * b > 16000) continue;
    const str = [a, b, c].sort().join("");
    if (!list.includes(str)) list.push(str);
  }
}

console.log(list.length);
