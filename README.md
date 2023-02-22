 # The five basic APIs on User :
 
 1. Get all Users
 2. Add User 
 3. Delete User 
 4. Update User
 5. Get User by ID
 
 
 # URLs :
 
 1. GET http://localhost:9000/users
 2. POST http://localhost:9000/users
 3. DELETE http://localhost:9000/users/:id
 4. PATCH http://localhost:9000/users/:id
 5. GET http://localhost:9000/users/:id
 
 # Request Body :
 
 {
 
     name : String ,
     
     email : String ,
     
     password : Number 
     
 }
 
 # Validations :
 
 1. Name must be 3 or more characters long 
 2. Name field should not be empty 
 3. Email should contains proper format 
 4. Pasword should not be empty 
 
