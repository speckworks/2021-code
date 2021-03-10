// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {

    firstString = stringA.toLowerCase().replace(/\W/g, '');
    secondString = stringB.toLowerCase().replace(/\W/g, '');
    stringA.split(' ').join('')
    stringB.split(' ').join('')
    console.log(firstString);
    console.log(secondString);
    
    let charMap = {};
    
    for(let char of firstString){
      if(!charMap[char]){
        charMap[char] = 1;
      } else {
        charMap[char]++;
      }
    }
    
    for(let char of secondString){
    if(!charMap[char]){
      return false;
    } else {
     charMap[char]--;
    } 
    }
    
    for(let char in charMap){
      if(charMap[char] == 0){
        return true;
      } else {
       return false
      }
    }
    
    
    }


module.exports = anagrams;
