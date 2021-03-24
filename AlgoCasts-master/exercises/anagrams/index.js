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
return cleanStr(stringA) === cleanStr(stringB)
}

function cleanStr(str){
  return str.replace(/[^\W]/g,'').toLowerCase().split().sort().join();
}




module.exports = anagrams;



// function anagrams(stringA, stringB) {

// const aCharMap = buildCharMap(stringA);
// const bCharMap = buildCharMap(stringB);

// if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length ){
//   return false;
// }

// for(let char in aCharMap)
// if(aCharMap[char] !== bCharMap[char]){
//   return false;
// } else {
// return true;
// } 
    
//     }

// function buildCharMap(str){
// const charMap = {};

// for(let char of str.replace(/\W/g, '').toLowerCase()){
//   charMap[char] = charMap[char] + 1 || 1;
// }

// return charMap;

// }

    // function anagrams(stringA, stringB) {

    //   firstString = stringA.toLowerCase().replace(/\W/g, '');
    //   secondString = stringB.toLowerCase().replace(/\W/g, '');
    //   stringA.split(' ').join('')
    //   stringB.split(' ').join('')
    //   console.log(firstString);
    //   console.log(secondString);
      
    //   let charMap = {};
      
    //   for(let char of firstString){
    //     if(!charMap[char]){
    //       charMap[char] = 1;
    //     } else {
    //       charMap[char]++;
    //     }
    //   }
      
    //   for(let char of secondString){
    //   if(!charMap[char]){
    //     return false;
    //   } else {
    //    charMap[char]--;
    //   } 
    //   }
      
    //   for(let char in charMap){
    //     if(charMap[char] == 0){
    //       return true;
    //     } else {
    //      return false
    //     }
    //   }
      
      
    //   }
  


