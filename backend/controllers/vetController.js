import Vet from "../models/Vet.js";
import generateJWT from "../models/helpers/generateJWT.js";
import generateId from "../models/helpers/generateid.js";


const register = async (req, res)  =>{
   const { email } = req.body;

    // registered user
   const userExists = await Vet.findOne({email})
   if (userExists){
    const error = new Error ("Usuario registrado");
    return res.status (400).json({msg: error.message});
   }

    try {
        const vet = new Vet(req.body);
        const vetSaved = await vet.save();

        res.json(vetSaved);

    } catch (error) {
        console.log(error);
    }

 
  
};

const profile = (req, res)  =>{
    const { veter } = req
    res.json({ profile: veter });

}

const confirm = async (req,res) =>{
    const { token } = req.params;

    const confirmUser = await Vet.findOne({ token });

    if (!confirmUser) {

        const error = new Error ('Token No Valido')
        return res.status (400).json({msg: error.message});
    } 
        try {
            confirmUser.token = null;
            confirmUser.confirm = true
       
            await confirmUser.save()

            res.json({msg: "confirm account"});
        } catch (error) {
            console.log(error)
            
        }
   
  
};

//autenticar
const authenticate = async (req, res)  => { 
    const { email, password } = req.body;

    const user = await Vet.findOne({ email });


if(!user){
  const error = new Error ("No existe el usuario");
    return res.status (400).json({msg: error.message});
}

if (!user.confirm) {
   const error = new Error ("Tu cuenta no ha sido confirmada");
   return res.status(403).json ({msg: error.message});
}
    

if (await user.comprobarPassword(password)){

    res.json({ token: generateJWT(user._id, user.name) });
}
else {

    const error = new Error ("es icorrecto el password");
    return res.status (400).json({msg: error.message});

}};


const forgotPassword = async (req, res) =>{
    const { email } = req.body;
       const existveter= await Vet.findOne({email})
       if (!existveter){
        const error = new Error ("No exist");
        return res.status(400).json({msg: error.message});
       }
 
    try {

        existveter.token = generateId()
        await existveter.save()
        res.json({ msg: "we will send your email with instructions"})
        
    } catch (error) {
        
    }


}
const checkToken = async (req, res) =>{

    const { token } = req.params
    const tokenValid = await Vet.findOne({ token })
    if (tokenValid){

        res.json({ msg: "si existe"});

    }else{
        const error = new Error ("Token no valido");
        return res.status(400).json({msg: error.message});
    }


}
const newPassword = async (req, res) =>{
    const { token } = req.params;
    const { password } = req.body;

    const veterinario = await Vet.findOne({ token })
    if(!veterinario){
        const error = new Error ("ERROR");
        return res.status(400).json({msg: error.message});
    }

    try {
        
        veterinario.token = null;
        veterinario.password = password;
        await veterinario.save()
        res.json({msg:"Modificado correctamente"})

    } catch (error) {
        
        console.log(error)
        
    }
     





}
export{

    register,
    profile,
    confirm,
    authenticate,
    forgotPassword,
    checkToken,
    newPassword
}
