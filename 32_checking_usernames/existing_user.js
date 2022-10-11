let current_user = ['Haroon', 'Majid', 'Ibrahim', 'Aamir']
let new_user = ['Hamid', 'Imran', 'HAROON', 'Aamir', 'Junaid']

let current_user_lower = current_user.map((names)=> names.toLowerCase());
for(let i=0; i<current_user.length+1; i++){

    if(current_user_lower.includes(new_user[i].toLowerCase()))

    console.log(`\n Username "${new_user[i]}" is already exist \n`)
    else
    console.log(`\n Username ""${new_user[i]}"" is available \n `)

}