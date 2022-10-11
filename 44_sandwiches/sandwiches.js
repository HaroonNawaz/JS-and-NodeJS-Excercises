let sandwich_ingredient1 = ['egg', 'cheese','pepper','bell pepper'];

let sandwich_ingredient2 = ['Mayonnaise','bbq sauce', 'mustard'];

let sandwich_ingredient3 = ['tomatoes','onion', 'spanish leaves', 'sauce'];


function sandwich(...sand_param){
    console.log(`\nSummary of the Sandwich ordered`)
    for(let i=0; i< sand_param.length; i++)
        console.log(sand_param[i]) 
            
        
}
//sandwich 1
sandwich(...sandwich_ingredient1);
//sandwich 2
sandwich(...sandwich_ingredient2);
//sandwich 3
sandwich(...sandwich_ingredient3);