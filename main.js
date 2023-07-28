function plusMinus(arr) {
    let zero = 0, plus = 0, minus = 0
    for(let i of arr){
        if(i > 0) plus++
        if(i < 0) minus++
        if (i === 0) zero++
    }
    console.log((plus / arr.length).toFixed(6));
    console.log((minus / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1])