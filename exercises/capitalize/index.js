// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// first solution

function capitalize(str) {
    str = str.split("");
    str[0] = str[0].toUpperCase();
    for(var i = 0; i < str.length; i++){
        if(str[i-1] == " "){
            str[i] = str[i].toUpperCase();
        }else{continue}
    }
    return str.join("");
}

module.exports = capitalize;
