import jwt from 'jsonwebtoken';
import Vet from '../models/Vet.js';


const checkAuth = async ( req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer') )
        
        {
       try {
       token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.veter = await Vet.findById(decoded.id).select("-password -token -confirm");
        return next()

       } catch (error) {
        const e = new Error ('Token No Valido') 
    return res.status (403).json({msg: e.message }); 
       }

    
    } 
    if (!token){
    const error = new Error ('Token No Valido')
    return res.status (403).json({msg: error.message});
}
    next();
};

export default checkAuth;