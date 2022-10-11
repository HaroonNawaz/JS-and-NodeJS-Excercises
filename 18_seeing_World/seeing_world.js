let places_ = ["Makkah", "Madinah", "Turkey", "Dubai", "Bagdaad"]

console.log(`\tOrginal Array`)
for (let orignal = 0; orignal< places_.length; orignal++){
console.log(places_[orignal])             //printing the orignal array
}

  
sorting_array = places_.slice()

console.log(`\n\tIn Alphabatical order`)
sorting_array.sort()              //Array in Alphabatical order
for (let i = 0; i< sorting_array.length; i++){
console.log(`${sorting_array[i]}`)
}

console.log(`\n\tAgain original once`)

for (let orignal = 0; orignal< places_.length; orignal++){
    console.log(places_[orignal])             //printing the orignal array again
    }
    console.log(`\n`)
    
    let reverse_array = places_.slice()
    console.log(`\n\tIn Reverse order`)
    reverse_array.reverse()                //Array in reverse order
    for (let i = 0; i< reverse_array.length; i++){
    console.log(`${reverse_array[i]}`)
    }
    
    console.log(`\tOrginal Array one`)
    for (let orignal = 0; orignal< places_.length; orignal++){
        console.log(places_[orignal])             //printing the orignal array again
        }
        console.log(`\n`)
    
    console.log(`\n\t Reversing the order of the original array`)
        places_.reverse()                //Array in reverse order
        for (let i = 0; i< places_.length; i++){
        console.log(`${places_[i]}`)
        }

    console.log(`\n\tReverting back to the original array`)
        places_.reverse()                //Array in reverse order
        for (let i = 0; i< places_.length; i++){
        console.log(`${places_[i]}`)
        }

    console.log(`\n\tIn sorting the Array to change its order`)
        places_.sort()                //Array in reverse order
        for (let i = 0; i< places_.length; i++){
        console.log(`${places_[i]}`)
        }

    console.log(`\n\tIn Reversing the order of the original array`)
        places_.reverse()                //Array in reverse order
        for (let i = 0; i< places_.length; i++){
        console.log(`${places_[i]}`)
        }