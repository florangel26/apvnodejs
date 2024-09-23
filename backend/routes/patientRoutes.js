import express from "express";
const router = express.Router();
import{getPatients, addPatient, obtenerPatient, updatePatient, deletePatient } from '../controllers/patientController.js';
import checkAuth from "../middleware/authMiddleware.js";


router
.route("/")
.post(checkAuth, addPatient)
.get(checkAuth, getPatients);


router
.route("/:id")
.get(checkAuth, obtenerPatient)
.put(checkAuth, updatePatient)
.delete(checkAuth, deletePatient);


export default router; 