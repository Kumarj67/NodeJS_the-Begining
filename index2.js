console.log("hello World!")
function add(a, b) {
    return a + b;
}
console.log(add(2, 3))
console.log(process.argv)
var args = process.argv.slice(2)
console.log("adding the number:", add(parseInt(args[0]), parseInt(args[1])));
