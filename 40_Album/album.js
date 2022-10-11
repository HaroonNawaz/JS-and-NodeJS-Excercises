function make_album(artist_name, Album_title, track=0){

    let album_obj = {
        art_name: artist_name,
        Alb_name: Album_title,
        tr_name: track,
    }
    return album_obj;
}

let dic1 = new make_album()
dic1.art_name = "vital sign",
dic1.Alb_name = "Vital Sign-Vol.1"
dic1.tr_name = ['Dil Dil Pakistan','Chehra']

console.log(`\n"${dic1.Alb_name}" is the Album of "${dic1.art_name}"\n\n`)
console.log('\nThe above are famous tracks \n' + dic1.tr_name.map(function (val) {return console.log(val)}))

let dic2 = new make_album()
dic2.art_name = "Sajjad Ali",
dic2.Alb_name = "Chief Sahab"
dic2.tr_name = ['Mahiwal','Im Back']

console.log(`\n"${dic2.Alb_name}" is the Album of "${dic2.art_name}"\n\n`)
console.log('\nThe above are famous tracks \n' + dic2.tr_name.map(function (val) {return console.log(val)}))


let dic3 = new make_album()
dic3.art_name = "Ali Haider",
dic3.Alb_name = "Dastaan"
dic3.tr_name = ['Maria','Wala Wai']

console.log(`\n"${dic3.Alb_name}" is the Album of "${dic3.art_name}"\n\n`)
console.log('\nThe above are famous tracks \n' + dic3.tr_name.map(function (val) {return console.log(val)}))
