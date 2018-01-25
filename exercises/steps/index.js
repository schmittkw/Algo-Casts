// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    var i = 1;
    // console.log("#"*i + " "*(n-i));
    while(i<=n){
        var wrong = "#"
        console.log(wrong*i)
        i++;
    }
}

module.exports = steps;
