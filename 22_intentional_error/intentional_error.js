let cities = ["Karachi", 1, "Islamabad",234, "Peshawar"]

console.log(cities.length) // 5
delete cities[1]

console.log(cities.length) /// length is still giving 5 members even after delete.....
                            //It's because delete doesn’t modify the original array but 
                            //instead places an 𝚎𝚖𝚙t𝚢 value at the specified index.

function non_undefined (value){
    return value != undefined
}


// the .filter() function, to filter out only the elements 
//that are valid (non undefined), 
let var_name = cities.filter(non_undefined).length               
console.log(var_name)