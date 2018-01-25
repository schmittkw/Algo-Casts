// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



// first solution

function anagrams(stringA, stringB) {
    stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB.replace(/[^\w]/g, "").toLowerCase();
    if(stringA.length != stringB.length){
        return false;
    }
    var strA = {};
    var strB = {};
    for(let char of stringA){
        strA[char] = strA[char] + 1 || 1;
    }
    for(let char of stringB){
        strB[char] = strB[char] + 1 || 1;
    }
    for(let char in strA){
        if(strA[char]==strB[char]){
            debugger;
            continue
        }else{return false}
    }
    return true;
}

module.exports = anagrams;
