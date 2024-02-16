import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export const SchemaCreateArtist = Joi.object({
  date_of_birth: Joi.string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/)
    .required()
    .example('DD/MM/YYYY'),
  instrument: Joi.string().valid('vocals', 'guitar', 'bass', 'piano', 'drums').required(),
  name: Joi.string().required(),
  nationality: Joi.string().required(),
});

export function Create_Artist_Dto(req: Request, res: Response, next: NextFunction): any {
  const { error } = SchemaCreateArtist.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: 'Invalid DTO',
      data: error.details[0].message,
    });
  }
  next();
}

export const SchemaUpdateArtist = Joi.object({
  date_of_birth: Joi.string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/)
    .optional()
    .example('DD/MM/YYYY'),
  id: Joi.string().required(),
  instrument: Joi.string().valid('vocals', 'guitar', 'bass', 'piano', 'drums').optional(),
  name: Joi.string().optional(),
  nationality: Joi.string().optional(),
});

export function Update_Artist_Dto(req: Request, res: Response, next: NextFunction): any {
  const { error } = SchemaUpdateArtist.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: 'Invalid DTO',
      data: error.details[0].message,
    });
  }
  next();
}
