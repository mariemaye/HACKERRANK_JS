let bigArr = [1000000001,1000000002,1000000003,1000000004,1000000005];
let i;
let x = 0;
let theSum;
theSum = bigArr.map(i=>x+=i,x=0).reverse()[0];
console.log(theSum);


