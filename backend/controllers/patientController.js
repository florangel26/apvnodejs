import { json } from "express";
import Patient from "../models/Patient.js";



const addPatient = async (req, res) => {
 const patient = new Patient(req.body)
 patient.veter = req.veter._id;

 try {
   const patientSaved = await patient.save()
   res.json(patientSaved);
 }
    
  catch (error) {
    console.log(error);
 }
 

};

const getPatients = async (req, res) => {
const patients = await Patient.find().where('veter').equals(req.veter);
res.json(patients);

};


const obtenerPatient = async (req, res) => {   
 const { id } = req.params;
 const patient = await Patient.findById(id);
 if(!patient){
    return res.status(404).json({msg:'No encontrado'})
 }
if( patient.veter._id.toString() !== req.veter._id.toString() ){

    return res.json({msg: 'acceso no valido'})
    
}
  res.json(patient);
};


const updatePatient = async (req, res) => { 
    const { id } = req.params;
    const patient = await Patient.findById(id);

    if(!patient){
       return res.status(404).json({msg:'No encontrado'})
    }
   if( patient.veter._id.toString() !== req.veter._id.toString()){
   
       return res.json({msg: 'acceso no valido'})
       
   }
   patient.name = req.body.name || patient.name;
   patient.ownwer = req.body.ownwer || patient.ownwer; 
   patient.email = req.body.email || patient.email;
   patient.date = req.body.date || patient.date; 
   patient.symptoms = req.body.symptoms || patient.symptoms;
   patient.veter = req.body.veter || patient.veter;

   try {
    const patientAct = await patient.save();
    res.json(patientAct)
     
   } catch (error) {
    console.log(error)
   }

  };


const deletePatient = async (req, res) => {  
    const { id } = req.params;
    const patient = await Patient.findById(id);

    if(!patient){
       return res.status(404).json({msg:'No encontrado'})
    }
   if( patient.veter._id.toString() !== req.veter._id.toString()){
   
       return res.json({msg: 'acceso no valido'})
       
   }
   try {
    await  patient.deleteOne() 
    res.json({msg: 'eliminado'})
   } catch (error) {
    console.log(error)
   }




 };


export {addPatient,  getPatients, obtenerPatient, updatePatient, deletePatient};
