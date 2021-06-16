let arr = [1,3,3,2];
let max = Math.max(...arr);
let result = arr.filter(c=>c===max);
console.log(result.length);