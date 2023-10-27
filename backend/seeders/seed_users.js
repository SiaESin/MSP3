const db = require('../models')

db.User.create([
    {
        name: 'user1',
        email: 'user1@test.com',
        password: 'user123'       
        
             
    }, {
        name: 'test',
        email: 'user2@test.com',
        password: 'test123'
        
    
    }, {   
        name: 'test2',
        email: 'test@test.com',
        password: 'test123'
                 
    }
])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})