db.flightData.updateOne({distance: 1200}, {$set: {marker: "delete"}})

db.flightData.updateMany({}, {$set: {marker: "toDelete"}})
