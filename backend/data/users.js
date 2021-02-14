const bcrypt=require('bcryptjs');

const users =[
    {
        name:'Admin',
        email:'Admin@gmail.com',
        password:bcrypt.hashSync('123456',12),
        isAdmin:true
    },
    {
        name:'John',
        email:'John@gmail.com',
        password:bcrypt.hashSync('123456',12),
     
    }, {
        name:'Max',
        email:'Max@gmail.com',
        password:bcrypt.hashSync('123456',12),
        
    },
];


module.exports=users;