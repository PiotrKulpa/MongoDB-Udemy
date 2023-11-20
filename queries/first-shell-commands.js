db.products.insertOne({name: "A book", price: 12.99})

db.products.insertOne({name: "T-shirt", price: 20.99, description: "This is high quality T-shirt"})

shop> db.products.insertOne({name: "Computer", price: 1220.99, description: "This is high quality PC", details: {cpu: "Intel i7", memory: 32}})
