(function(array) {
    let a = [];
    array.sort(function(x, y) { return x - y; });
    for (i = 0; i < array.length; i++) {
        if (array[i] != array[i + 1]) {
            a.push(array[i]);
        }
    }
    console.log(a);
})([22, 45, 65, 67, 22])