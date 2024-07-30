function rom(num) {
  const digits = String(+num).split("");
  // prettier-ignore
  const key = [
      "", "C", "CC", "CCC", "CD",
      "D", "DC", "DCC", "DCCC", "CM",
      "", "X", "XX", "XXX", "XL", 
      "L", "LX", "LXX", "LXXX", "XC",
      "", "I", "II", "III", "IV", 
      "V", "VI", "VII", "VIII", "IX",
    ]
  let roman_num = "", i = 3;
  while (i--) {
    roman_num = (key[+digits.pop() + i * 10] || "") + roman_num;
  }
  return Array(+digits.join("") + 1).join("M") + roman_num;
}

let sum = 0;

for (let i = 1; i <= 1000; i++) {
  const roman = rom(i);
  if (roman.length === 11) {
    sum += i;
  }
}

console.log(sum);
