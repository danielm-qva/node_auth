
import { Response } from 'express'

const handeError = (res: Response, message = 'Algo a sucecido', code = 403, data = {}) => {
    res.status(code);
    res.json({ message, data });
}

export default handeError;