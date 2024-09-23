import express from "express";
const router = express.Router();
import{profile, register, confirm, authenticate,forgotPassword, checkToken, newPassword} from '../controllers/vetController.js'
import checkAuth from "../middleware/authMiddleware.js";
//publico
router.post("/", register);
router.get("/confirm/:token", confirm);
router.post ("/login", authenticate);
router.post ("/forgot-password", forgotPassword);
router.get("/forgot-password/:token", checkToken);
router.post ("/forgot-password/:token", newPassword);


//privado
router.get("/profile", checkAuth, profile);


export default router;
