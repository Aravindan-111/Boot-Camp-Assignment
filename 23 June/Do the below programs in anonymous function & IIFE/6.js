(function(a, b) {
    let c = a + "," + b;
    let d = c.toString().split(",");
    d.sort(function(x, y) { return x - y; });
    let e = (+d[a.length - 1] + +d[a.length]) / 2;
    console.log(e);
})([1, 12, 15, 26, 38], [2, 13, 17, 30, 45])