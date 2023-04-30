const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

//Function findMatching with arguments of array and string. It has to return the matching list of drivers. 
//This function should be case insensitive.

function findMatching(array, name) {
    return array.filter(element => element.toUpperCase() === name.toUpperCase())    
}

//The filter() method creates a new array, which we can return directly. Inside the parenthesis must be
//the callback function, which takes element as paramether and add the elements that satisfies the 
//conditon to the return of the filter() (i.e, a new array).  

console.log(findMatching(drivers, "bobby"))

//This function takes an array of drivers' names and a string as arguments for querying the array, 
//and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(array, letter) {
    return array.filter(element => element.toUpperCase().startsWith(letter.toUpperCase()))
}
console.log(fuzzyMatch(drivers, "a"))

//This function takes an array of driver objects and a string as arguments. 
//Each driver object has two properties: name and hometown. The function should return
//each element whose name property matches the provided string argument.

const driversObj = [{name: "Ana", hometown: "Niteroi"}, {name: "Stuart", hometown: "Falkirk"}]

function matchName(array, name) {
    return array.filter(element => element.name === name)
}
console.log(matchName(driversObj, "Ana"))


