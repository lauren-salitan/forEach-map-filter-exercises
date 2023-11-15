// forEach exercises

// doubleValues
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to 
// the function doubled
// doubleValues([1,2,3]) // [2,4,6]
// doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

// const values = [1,2,3];
// const doubledValues = values.forEach(function(value){
//     return value * 2;
// })
function doubledValues(array) {
    let newArray = [];
    array.forEach(function(value) {
      newArray.push(value * 2);
    });
    return newArray;
  }

//onlyEvenValues
// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed 
// to the function
function onlyEvenValues(array){
    let newArray = [];
    array.forEach(function(value){
        if (value % 2 === 0){
            newArray.push(value);
    }});
    return newArray;
}

//showFirstAndLast
// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last 
// character of each string.
function showFirstAndLast(array){
    let newArray = [];
    array.forEach(function(value){
        newArray.push(value[0] + value[value.length - 1]);
    });
    return newArray;
}

//addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the 
// function with the new key and value added for each object
function addKeyAndValue(array, key, value){
    array.forEach(function(val){
        val[key] = value;
    });
    return array
}

// valueCount
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of
// times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
function valueCount(string){
    let array = string.split("");
    let object = {};
    let vowels = "aeiou";
    array.forEach(function(letter){
        let lowerCase = letter.toLowerCase()
        if (vowels.indexOf(lowerCase) !== -1){
            if (object[lowerCase]){
                object[lowerCase]++;
            } else {
                object[lowerCase] = 1;
            }
        }
    });
    return object;
}



// map

// doubleValuesWithMap
// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to
// the function doubled
function doubledValuesWithMap(array){
    return array.map(function(value){
        return value*2;
    });
}

// valTimesIndex
// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is
// currently at in the array.
function valTimesIndex(array){
    return array.map(function(value, index){
        return value * index;
    });
}

// extractKey
// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in
// each object.
function extractKey(array, key){
    return array.map(function(value){
        return value[key];
    });
}

// extractFullName
// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name
// of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.
function extractFullName(array){
    return array.map(function(value){
        return value[first] + " " + value[last];
    });
}

function extractFullName(array) {
    return array.map(function(value) {
      return value.first + " " + value.last;
    });
  }



// filter exercises

// filterByValue
// Write a function called filterByValue which accepts
// an array of objects and a key and returns a new array with
// all the objects that contain that key.

function filterByValue(array, key){
    return array.filter(function(value){
        return value[key] !== undefined;
    });
}

// find
// Write a function called find which accepts an array and a
// value and returns the first element in the array that has
// the same value as the second parameter or undefined if the
// value is not found in the array.
function find(array, value){
    return array.filter(function(val){
        return val === value;
    })[0];
}

// findInObj
// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found
// value in the array.
function findInObj(array, key, value){
    return array.filter(function(val){
        return val[key] === value
    })[0];
}

// removeVowels
// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and
// lowercased) removed. Every character in the new string should be lowercased.
function removeVowels(string){
    let vowels = "aeiou";
    return string.toLowerCase().split("").filter(function(value){
        return vowels.indexOf(value) === -1;
    }).join("");
}

// doubleOddNumbers
// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled
// (HINT - you can use map and fitler to double and then filter the odd numbers).
function doubleOddNumbers(array){
    // let newArray = [];
    // array.forEach(function(value) {
    //     newArray.push(value * 2);
    //   });
    //   return newArray;

      return array.filter(function(value){
        return value % 2 !== 0;
      }).map(function(value){
        return value * 2;
      });
}

