db.contacts.createIndex({"dob.age": 1}) // create index for age in ASC order

db.sessions.createIndex ({createdAt: 1}, {expireAfterSeconds: 10}) // Time To Live implementation
