const mongoose=require('mongoose');



const connectDB=async ()=>{
    const options={useNewUrlParser: true,useUnifiedTopology:true,};
try {
        const connect=await mongoose.connect(process.env.MONGO_URL,options)
        console.log('MongoDB connected')
    } 
    
    catch (error) {console.error(`Error${error}`)
    process.exit(1)
        
    }
}

module.exports=connectDB;