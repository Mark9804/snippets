/**
@params start: number
@params step: number
@params end: number
@params target: string
@return: number
**/
function countOfNum(start, step, end, target) {
  let count = 0;
  for (let i = start; i <= end; i += step) {
    const str = i + '';
    count += [...str.matchAll(new RegExp(target * 1, 'g'))].length;
  }
  
  return count;
}

console.log(countOfNum(7, 7, 7777777, 7))