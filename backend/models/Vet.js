import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generateId from "./helpers/generateid.js";

const veterionarioSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
   email: {
    type: String,
    required: true,
    unique: true,
   },

   phone:{
    type: String,
    default: null,
    trim: true
   },
   web:{
    type: String,
    default: null,
   },
   token: {
    type: String,
    default: generateId(),
   },
   confirm: {
    type: Boolean, 
    default: false,
   }
});


veterionarioSchema.pre("save", async  function(next){
  if (!this.isModified("password")) {
    next()
  }

  const salt = await  bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
});



veterionarioSchema.methods.comprobarPassword = async function (passwordForm) {
  return await bcrypt.compare(passwordForm, this.password);
  
}


const Vet  = mongoose.model("Vet", veterionarioSchema);
export default Vet;