// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

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
        }
        continue;
    }
    for(let char of string){
        if(chars[char]==maxNum){
            maxLetter = char;
        }
        continue;
    }
    return maxLetter;
}

module.exports = maxChar;
