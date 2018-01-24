// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



// first solution

function maxChar(str) {
    const chars = {};
    var string = str.split("");
    for(let char of string){
        chars[char] = chars[char] + 1 || 1;
    }
    var maxNum = 0;
    var maxLetter = "";
    for(let char of string){
        if(chars[char] > maxNum){
            maxNum = chars[char];
            maxLetter = char;
        }
        continue;
    }
    return maxLetter;
}


// NOTES
// to iterate thru an Object
// var charMap = {};
// for(let char in charMap)

// to iterate thru String or Array
// const string = '';
// for(let char of string)




module.exports = maxChar;
