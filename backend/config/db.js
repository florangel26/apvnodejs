import mongoose from "mongoose";


const conectarDB = async () => {

    try {
        const db =  await mongoose.connect(process.env.MONGO_URI, {
          useNewURLParser: true,
          useUnifiedTopology: true,
        })

      const url = `${db.connection.host}:${db.connection.port}`
      console.log (`conectado a ${url}`);

    } catch (error) {
        
        console.log('error: ${error.message}');
        ProcessingInstruction.exit(1)
    }
    
};

export default conectarDB;