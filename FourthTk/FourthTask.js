function sumDiagonal(matrix) {

    let firstSum = 0, secondSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        firstSum += matrix[row][row];
        secondSum += matrix[row][matrix.length - row - 1];
    }
    console.log(firstSum + ' ' + secondSum);
    console.log(Math.abs(firstSum-secondSum) );
}

sumDiagonal([[11,2,4],[4,5,6],[10,8,-12]]);