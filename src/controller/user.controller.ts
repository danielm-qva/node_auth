import e, { Response, Request } from 'express'
import { randoOtp } from '../util/generateOTP';
import handeError from '../util/HandlError';

//models 
import { user } from '../model/user.model'
import { passwordHash } from '../util/passwordHash';

export const login = (req: Request, res: Response) => {
    const { email, pass } = req.body;
    //tendriamos q comprobar user and password
    if (email === 'Daniel' && pass === '123') {
        // generar el jwt
        const emialS = String(email);
        const otp = randoOtp(emialS.length);
        throw handeError(res, "Hola mundane", 404, { otp });
    }
    else {
        throw handeError(res, "Ha Ocurrido algo al intentear iniciar", 403, req.body)
    }
}

export const register = async (req: Request, res: Response) => {
    res.status(200).json({ name: "register" });
}