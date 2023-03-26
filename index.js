// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sallyh', 'Annette', 'Sarrah', 'bobby']

function findMatching (array, string){
    let newArray = [];
    for (let element of array){
            if (element == string || element == string.toUpperCase() || element == string.toLowerCase()){
            newArray.push(element);
            }
    }

return newArray                     
}
findMatching(drivers, "Bobby");



function fuzzyMatch (array, string){
    let newArray = [];
        for (let element of array){
            if (string == element.slice(0,2)){
            newArray.push(element);}
        }
return newArray
}
fuzzyMatch(drivers, "Sa");


function matchName(array, string){
    let newArray = [];
    for (let element of array){
       
       if (element.name === string){
          newArray.push(element);
          
        }
      
    }
    return newArray
}
(matchName(drivers, "Bobby"));

