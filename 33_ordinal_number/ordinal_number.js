let ordinal_number=[1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let i=0; i<ordinal_number.length; i++)
{
    if(ordinal_number[i]==1)
        console.log(`1st`)
    else if (ordinal_number[i]==2)
        console.log('2nd')
    else if (ordinal_number[i]==3)
        console.log(`3rd`)
    else
        console.log(`${ordinal_number[i]}th`)
    
}