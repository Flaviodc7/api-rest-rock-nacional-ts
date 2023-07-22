import { Router, Response, Request } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send({data: 'THERE_ITS_GONNA_BE_THE_MODELS'})
})

export { router };