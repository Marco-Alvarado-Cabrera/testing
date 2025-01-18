import { Router } from "express";
import UserRouter from './UserRouter'

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "API funcionando correctamente" });
});

router.use('/user', UserRouter)

export default router;