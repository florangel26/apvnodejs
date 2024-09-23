import express from "express";
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import vetRoutes from './routes/vetRoutes.js';
import patientRoutes from './routes/patientRoutes.js';


const app = express();

app.use(express.json());

dotenv.config();
conectarDB();

app.use("/api/vet", vetRoutes);
app.use("/api/patient", patientRoutes);

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log(`servidor funcionando ${PORT}`)
});