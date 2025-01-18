import { Request, Response } from "express";
import Users from "../models/Users.models";

export const getAllUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const allUsers = await Users.findAll();
        return res.status(200).json({ data: allUsers });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};
