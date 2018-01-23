// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var i = 0;
    var temp;
    str = str.split("");
    while(i<(str.length)/2){
        temp = str[i];
        str[i] = str[str.length-1-i];
        str[str.length-1-i] = temp;
        i++;
    }
    str = str.join("")
    return str;
}



// very simple solution but sometimes not allowed to use reverse()

// function reverse(str) {
//     return str.split("").reverse().join("");
// }



// more complex solution using reduce

// function reverse(str){
//     debugger;
//     return str.split('').reduce((reverse, character) => character + reverse, '');
// }

// reverse('abcd');

// must call function when inspecting with debugger/node

module.exports = reverse;
