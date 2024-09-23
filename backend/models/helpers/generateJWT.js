import jwt from "jsonwebtoken";


const generateJWT = (id, name) => {
    return jwt.sign({ id, name }, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });
  };
  

export default generateJWT;