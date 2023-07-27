import { Request, Response } from "express"
import { handleHttp } from '../utils/error.handle'
import { getOrders as getOrdersService } from "../services/order.service";

const getItems = async (req: Request, res: Response) => {
    try {
        res.send({
            data: 'THIS CAN BE VIEWED BY A SESSION USER'
        });
    } catch (e) {
        handleHttp(res, "ERROR_COULDN'T_GET_ARTISTS");
    }
}

export { getItems }