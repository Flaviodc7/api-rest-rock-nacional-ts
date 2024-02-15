import { RespuestaDeCodigo } from './httpstatus';

export abstract class ApiController {
  response(res: any, data: any) {
    if (data.status >= 200 && data.status < 400) {
      console.info(data);
    } else {
      console.error(data);
    }
    return res.status(data.status ?? 500).send({
      status: data.status ?? 500,
      message: RespuestaDeCodigo(data.status),
      data: data.data ?? data,
    });
  }
}
