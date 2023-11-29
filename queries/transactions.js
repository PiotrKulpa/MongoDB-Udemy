const session = db.getMongo().startSession()  
const postsColl = session.getDatabase ("blog").posts  
const usersColl = session.getDatabase ("blog").users  
session.startTransaction()  
usersColl.deleteOne({_id: ObjectId("5ba0adfacfd31f948ed7e")})
