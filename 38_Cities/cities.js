function describe_cities(city, country="Pakistan"){
    console.log(`${city} is in ${country}`)
}

describe_cities("Karachi")      // taking country from default
describe_cities("Jeddah", "KSA")
describe_cities("Kabul", "Afghanistan")
describe_cities("Tehran", "Iran")