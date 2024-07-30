const start = 1359
let sum = 0

for (let i = 1359; i <= 100000000; i += 1359) {
  const thousands = Math.floor(i / 1000)
  sum += (thousands + "")[thousands.toString().length - 1] * 1
}

console.log(sum)