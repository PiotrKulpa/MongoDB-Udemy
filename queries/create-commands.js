db.products.insertOne({name: "A book", price: 12.99})

db.products.insertOne({name: "T-shirt", price: 20.99, description: "This is high quality T-shirt"})

db.products.insertOne({name: "Computer", price: 1220.99, description: "This is high quality PC", details: {cpu: "Intel i7", memory: 32}})

db.flightData.insertOne({departureAirport: "TXL", arrivalAirport: "LHR"})

db.flightData.insertOne({departureAirport: "TXL", arrivalAirport: "LHR", _id: "txl-lhr-1"}) // with custom id

db.flightData.insertOne({departureAirport: "MUC", arrivalAirport: "SFO", aircraft: "Airbus A380", distance: 1200, intercontinental: true})

// insert many documents
db.flightData.insertMany([
   {
     "departureAirport": "MUC",
     "arrivalAirport": "SFO",
     "aircraft": "Airbus A380",
     "distance": 12000,
     "intercontinental": true
   },
   {
     "departureAirport": "LHR",
     "arrivalAirport": "TXL",
     "aircraft": "Airbus A320",
     "distance": 950,
     "intercontinental": false
   }
 ])

db.hobbies.insertMany([
    {_id: "yoga", name: "Yoga"},
    {_id: "cooking", name: "Cooking"},
    {_id: "hiking", name: "Hiking"}
], {ordered: false}) // ordered determins if insert will continue event if error 

// importing data
mongoimport --db movieData --collection movies --file tv-shows.json --jsonArray --drop
