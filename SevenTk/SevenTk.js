let arr = [1,2,3,4,5];
let [a,b,c] = arr.reduce(([a,b,c],x)=>[a>x?a:x,b<x?b:x,c+x],[NaN,NaN,0]);
console.log(c-a,c-b);

