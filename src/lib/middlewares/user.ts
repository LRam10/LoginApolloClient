import { Request, Response, NextFunction } from "express";
import { getUserData } from "./jwt";

export const isConnected = (isLogged = true, privileges = ['user'], redirectTo = '/') => async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
//gett user data by passing the 'at' attribute
const user = await getUserData(req.cookies.at); 
    if(!user && !isLogged){
        //allow not connected user
        return next();
    }
    //allow connected users and check prviliges
    if(user && isLogged){
        if(privileges.includes('god') && user.privilege === 'god' ) {
            return next();
        }
        if(privileges.includes('admin') && user.privilege === 'admin' ) {
            return next();
        }
        res.redirect(redirectTo);
    }
    else{
        res.redirect(redirectTo);
    }

}