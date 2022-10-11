let users = ['Admin', 'db_user', 'app_user', 'build_engineer', 'gues_user']

for(let i = 0; i<users.length; i++)
{
    if(users[i] === "Admin")
        console.log(`\n Hello Admin, would you like to see a status report\n`)
    else
        console.log(`Hello ${users[i]} - Thank You for logging in again \n`)
}