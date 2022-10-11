let guest_list =  ["Dada", "Dadi", 'Nana', 'Nani']

console.log(`Assalam Alaikum ${guest_list[0]} ! please have dinner with us at our home}`)
console.log(`Assalam Alaikum ${guest_list[1]} ! please have dinner with us at our home}`)
console.log(`Assalam Alaikum ${guest_list[2]} ! please have dinner with us at our home}`)
console.log(`Assalam Alaikum ${guest_list[3]} ! please have dinner with us at our home}`)


console.log(`\nJust came to know that ${guest_list[2]} cant't make the dinner \n`)

guest_list.splice(1,1, "Mammu")

console.log(`Assalam Alaikum ${guest_list[0]} ! please have dinner with us at our home}`)
console.log(`Assalam Alaikum ${guest_list[1]} ! please have dinner with us at our home}`)
console.log(`Assalam Alaikum ${guest_list[2]} ! please have dinner with us at our home}`)
console.log(`Assalam Alaikum ${guest_list[3]} ! please have dinner with us at our home}`)

console.log(`\n Good to know that we can have one more guest`)

guest_list.unshift("Bhai Jan")
guest_list.splice(2,0, "father-in-law")
guest_list.push("mother-in law")


console.log(`Assalam Alaikum ${guest_list[0]} ! please have dinner with us at our home}`)
console.log(`Assalam Alaikum ${guest_list[1]} ! please have dinner with us at our home}`)
console.log(`Assalam Alaikum ${guest_list[2]} ! please have dinner with us at our home}`)
console.log(`Assalam Alaikum ${guest_list[3]} ! please have dinner with us at our home}`)
console.log(`Assalam Alaikum ${guest_list[4]} ! please have dinner with us at our home}`)
console.log(`Assalam Alaikum ${guest_list[5]} ! please have dinner with us at our home}`)
console.log(`Assalam Alaikum ${guest_list[6]} ! please have dinner with us at our home}`)