// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    stringArray = str.split(' ');
    //console.log(stringArray);
    let capitalized = []
    
    for(let el of stringArray){
    el = el[0].toUpperCase() + el.substring(1);
    capitalized.push(el);
    }
    //console.log(capitalized);
    return capitalized.join(' ')
    }

module.exports = capitalize;
