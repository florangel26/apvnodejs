import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import conectarDB from './config/db.js';
import vetRoutes from './routes/vetRoutes.js';
import patientRoutes from './routes/patientRoutes.js';


const app = express();

app.use(express.json());

dotenv.config();
conectarDB();
const dominiosPermitidos = ['http://localhost:5173']

const corsOption = {
    origin: function (origin, callback){
   if (dominiosPermitidos.indexOf(origin) !== -1) {
//origen del request esta permitido
callback(null, true);



   } else {
    callback(new Error('No permitido por CORS'))
   }

    }
}

app.use(cors(corsOption));

app.use("/api/vet", vetRoutes);
app.use("/api/patient", patientRoutes);

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log(`servidor funcionando ${PORT}`)
});