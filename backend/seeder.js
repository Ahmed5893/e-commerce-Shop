const mongoose=require('mongoose');
const dotenv=require('dotenv');
const users=require('./data/users');
const products=require('./data/products');
const User=require('./models/userModel');
const Product=require('./models/productModel');
const Order=require('./models/orderModel');
const connectDB=require('./config/db');


dotenv.config();
connectDB();

const importData=async ()=>{
    try {
         await Order.deleteMany();
         await User.deleteMany();
         await Product.deleteMany();
         const createUser=await User.insertMany(users)
         const admin=createUser[0]._id;
         const sampleProducts=products.map(product=>{
             return {...product,user:admin}

         })
       await Product.insertMany(sampleProducts)
       console.log('Data Imported Successly...')
       process.exit();
    } catch (error) {
        console.error(`Something Went Wrong: ${error}`);
        process.exit(1);
    }
}



const deletetData=async ()=>{
    try {
         await Order.deleteMany();
         await User.deleteMany();
         await Product.deleteMany();
         console.log('Data Deleted Successly...')
       process.exit();
         
      
    } catch (error) {
        console.error(`Something Went Wrong: ${error}`);
        process.exit(1);
    }
}

if(process.argv[2]==='-d'){
    deletetData();
}else{
    importData();
}

