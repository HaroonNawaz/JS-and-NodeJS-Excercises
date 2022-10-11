let magicians = ['Chris Angle', 'SS Adams', 'Argus']



function show_magicians(){
    for(let i = 0; i<magicians.length; i++)
    console.log(magicians[i])
}


show_magicians(...magicians)
