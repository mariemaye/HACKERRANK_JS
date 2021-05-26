let arr1 = [17,28,30];
let arr2 = [99,16,8];
let alisScore = 0,bobsScore=0;
alisScore = (arr1[0]>arr2[0]?1:0)+(arr1[1]>arr2[1]?1:0)+(arr1[2]>arr2[2]?1:0);

bobsScore = (arr2[0]>arr1[0]?1:0)+(arr2[1]>arr1[1]?1:0)+(arr2[2]>arr1[2]?1:0);
let result = [alisScore,bobsScore];
console.log(result);