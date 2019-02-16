// Functions results will be shown in the console (except functions #3 and #4, as they are reusing in other functions)

let data = 
[
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      "age": 2,
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      "age": 19,
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
]

// 1
function findTypes() {
    let inputType = [];
    for (let i = 0, j = arguments.length; i < j; i++) {
        inputType.push(typeof(arguments[i]));
    }
    console.log(inputType); 
}
findTypes(null, 5, []);

// 2
function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
executeforEach([1,2,3], function(el) { 
    console.log(el) 
}); 

// 3 
function mapArray(arr, callback) {
    let newArray = [];
    arr.forEach(item => newArray.push(callback(item)));
    return newArray;
}
mapArray([2, 5, 8], function(el) { 
    return el + 3; 
}) 

// 4 
function filterArray(arr, callback) {
    let newArray = [];
    arr.forEach(item => {
        if (callback(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}
filterArray([2, 5, 8], function(el) { 
    return el > 3 
})

// 5 
function getAmountOfAdultPeople(arr) {
    let adultNumber = filterArray(arr, item => {
        return item.age > 18;
    });
    console.log(adultNumber.length); 
}
getAmountOfAdultPeople(data);

// 6
function getGreenAdultBananaLovers(arr) {
    let newArray = filterArray(arr, item => {
        return item.age > 18 && item.favoriteFruit === "banana" && item.eyeColor === "green";
    });
    let bananaLovers = mapArray(newArray, item => item.name);
    console.log(bananaLovers);
}
getGreenAdultBananaLovers(data);

// 7 
function keys(obj) {
    let keyArrays = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            keyArrays.push(prop)
        }
    }
    console.log(keyArrays);
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

// 8
function values(obj) {
    let valueArray = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            valueArray.push(obj[prop])
        }
    }
    console.log(valueArray);
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});

// 9 
function showFormattedDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    console.log(`Date: ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`);
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

// 10
function isEvenYear(date) {
    console.log(date.getFullYear() % 2 === 0);
}
isEvenYear(new Date('2019-01-27T01:10:00'))

// 11 
function isEvenMonth(date) {
    console.log(date.getMonth() % 2 !== 0);
}
isEvenMonth(new Date('2019-02-27T01:10:00')) 