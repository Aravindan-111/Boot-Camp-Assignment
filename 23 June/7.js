let hours = 10;

function getSeconds() {
    hours = hours * 60 * 60;
    return hours;
}
var seconds = getSeconds(hours);
console.log(seconds);