db.flightData.updateOne({distance: 1200}, {$set: {marker: "delete"}}) // this will only override marker

db.flightData.updateMany({}, {$set: {marker: "toDelete"}}) // this will only override marker

db.flightData.update({_id: ObjectId("123123")}, {delayed: false}) // this will override all data except of id

db.users.updateMany({totalAge: {$gt: 30}}, {$inc: {"hobbies.$[].frequency": -1}}) // $[] updates all elements in array

db.users.updateMany({"hobbies.frequency": {$gt: 2}}, {$set:{"hobbies.$[el].goodFrequency": true}}, {arrayFilters: [{"el.frequency": {$gt: 2}}]}) // updates all elements in array with applied filter

db.users.updateOne ({name: "Maria"}, {$push:{$hobbies:{$each:[{title: "Good Wine", frequency: 1}, {title: "Hiking", frequency: 2}], $sort: {frequency: -1}}}}) // adding elements to array and sort

db.users.updateOne({name: "Maria"}, {$pull: {hobbies: {title: "Hiking"}}}) // remove element from array

db.users.updateOne ({name: "Chris"}, {$pop: {hobbies: 1}}) // remove last element in array
