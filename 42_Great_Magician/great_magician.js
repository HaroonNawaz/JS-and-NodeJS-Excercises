

let magicians = ['Chris Angle', 'SS Adams', 'Argus']

let arr = make_great()
// console.log(arr)
// console.log(magicians)

// console.log(make_great())
function show_magicians(){
    for(let i = 0; i<arr.length; i++)
    console.log(` ${arr[i]}`)
}

function make_great(){
    let arr2= magicians.map(Element => `Great! ` +Element)
    return arr2
}
show_magicians(arr)

