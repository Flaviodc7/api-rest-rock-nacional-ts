import { Request } from 'express';

export interface IRequestWithUserMiddleware extends Request {
  userEmail?: string;
}
