import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IRequestWithUserMiddleware } from './tokenMiddleware.interface';

export const extractEmailFromToken = async (
  req: IRequestWithUserMiddleware,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.sendStatus(401);
    return;
  }

  try {
    const decodedToken = jwt.decode(token) as any;
    if (decodedToken.general_email) {
      req.body.userEmail = decodedToken.general_email;
      next();
    } else {
      res.sendStatus(403);
    }
  } catch {
    res.sendStatus(403);
  }
};
