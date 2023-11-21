db.flightData.updateOne({distance: 1200}, {$set: {marker: "delete"}}) // this will only override marker

db.flightData.updateMany({}, {$set: {marker: "toDelete"}}) // this will only override marker

db.flightData.update({_id: ObjectId("123123")}, {delayed: false}) // this will override all data except of id
