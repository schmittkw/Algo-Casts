// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



// first solution

function reverseInt(n) {
    var signs = Math.sign(n);
    n = n.toString().split("");
    if(signs == -1){
        n.shift()
    }
    n = n.reverse()
    if(signs == -1){
        n.unshift('-')
    }
    return parseInt(n.join(""))
}

module.exports = reverseInt;
