// find does not return all documents, it returns some documents and coursor objecs with some methods like "it"
db.flightData.find({distance: {$gt: 1000}}) // $gt stands for greater than

db.flightData.find({"status.details": "on-time"}) // accessing structured data
