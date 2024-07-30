for (let i = 700700700; i >= 0; i--) {
  const cubeRoot = Math.cbrt(i)
  if (Number.isInteger(cubeRoot)) {
    console.log(i)
    break
  }
}