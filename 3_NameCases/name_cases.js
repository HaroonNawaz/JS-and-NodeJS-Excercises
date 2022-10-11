let person_name = "Haroon";

//lowercase
let var_lower = person_name.toLowerCase();
console.log(`Your name in "Lower" is as : ${var_lower}`);

//upercase
let var_upper = person_name.toUpperCase()
console.log(`Your name in "Capital" is as : ${var_upper}`);

//titlecase
let var_title = person_name.split(" ").map(
    w => w[0].toUpperCase() + w.substring(1).toLowerCase()
).join(" ")
console.log(`Your name in "Tilecase" is as : ${var_title}`)


