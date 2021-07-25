function arr(a) {
    // let count = 0;
    // let sum = 0;
    let c = [];
    a.sort(function(x, y) { return x - y });
    // for (i = 1; i <= a; i++) {
    //     c.push(Math.pow(2, i));
    // }
    //     } else if (a[i] < 0) {
    //         sum = sum + a[i];
    //     }
    // }

    // c.push(sum);
    return a[a.length - 1];
}
let z = arr([-5, 10, -3, 12, -9, 5, 90, 0, 1]);
console.log(z);