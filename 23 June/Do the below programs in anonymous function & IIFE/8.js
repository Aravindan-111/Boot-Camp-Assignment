(function(array, k) {
    let temp = [];
    let array1 = [];
    let x = k;
    for (i = 0; i < k; i++) {
        temp[i] = array[i];
    }
    for (j = 0; j < array.length - (x - 1); j++) {
        array1[j] = array[k];
        k++;
    }
    console.log([array1 + temp]);
})([1, 2, 3, 4, 5, 6, 7], 4)