let users = ['Admin', 'db_user', 'app_user', 'build_engineer', 'gues_user']

if(users.length==0)
    console.log(`\n we have ${users.length} users \n`)

for(let i = 0; users.length; i++)
    {
        console.log(`${users.pop()} has been remove`)

    }
if(users.length == 0)
    console.log(`\nWe need to find some users now\n`)