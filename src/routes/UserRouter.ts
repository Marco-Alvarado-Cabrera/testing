import { Router } from "express";
import { getAllUsers } from "../handlers/User.handlers";

const router = Router();

router.get('/all', getAllUsers);


declare module 'express-serve-static-core' {
}

export default router;
