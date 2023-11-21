db.products.insertOne({name: "A book", price: 12.99})

db.products.insertOne({name: "T-shirt", price: 20.99, description: "This is high quality T-shirt"})

db.products.insertOne({name: "Computer", price: 1220.99, description: "This is high quality PC", details: {cpu: "Intel i7", memory: 32}})

db.flightData.insertOne({departureAirport: "TXL", arrivalAirport: "LHR"})

db.flightData.insertOne({departureAirport: "TXL", arrivalAirport: "LHR", _id: "txl-lhr-1"})

db.flightData.insertOne({departureAirport: "MUC", arrivalAirport: "SFO", aircraft: "Airbus A380", distance: 1200, intercontinental: true})
