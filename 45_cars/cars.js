function cars_info(manufacturer, model, color=undefined, option=undefined)
    {

    let car_obj ={
        manufacturer_name: manufacturer,
        model_name: model,
        car_color: color,
        car_AC:     option
            }

for (let i of Object.values(car_obj))
        if (i===undefined){
            console.log(``);
        }
        else console.log(i);

}

cars_info("Toyota",'Yaris')

cars_info("Honda", "BRV", "Silver", "Yes")
