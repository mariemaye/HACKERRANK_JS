function randomArr(count,min,max){
    if(count<0) return;
    var ar=[],t;
    while(count){
        t=Math.floor(Math.random()*(max-min)+min);
        if(ar.indexOf(t)===-1){
            ar.push(t);
            count--;

        }
    }
    return ar;
}let ar = randomArr(5,1,100);console.log(ar);
let x = 0;
let theSum=ar.map(i=>x+=i,x=0).reverse()[0];
console.log(theSum);
