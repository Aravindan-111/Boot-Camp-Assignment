(function(a) {
    let sum = 0;
    let b = a.split(",")
    for (i = 0; i < b.length; i++) {
        sum = +b[i] + sum;
    }
    console.log(sum);
})('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9')