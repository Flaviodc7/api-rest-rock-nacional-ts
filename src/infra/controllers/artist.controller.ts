import { Request, Response } from 'express';
import { ApiController } from '@common/api.controller';
import { IArtistUseCase } from '@modules/artist/application/artist.usecase.interface';

export class ArtistController extends ApiController {
  constructor(private readonly artistUseCase: IArtistUseCase) {
    super();
  }

  createArtist = async ({ body, headers }: Request, res: Response) => {
    try {
      this.response(res, await this.artistUseCase.createArtist(body));
    } catch (error) {
      this.response(res, error);
    }
  };

  getArtist = async ({ params }: Request, res: Response) => {
    try {
      const { id } = params;
      this.response(res, await this.artistUseCase.getArtist(id));
    } catch (error) {
      this.response(res, error);
    }
  };

  getArtists = async (_req: Request, res: Response) => {
    try {
      this.response(res, await this.artistUseCase.getArtists());
    } catch (error) {
      this.response(res, error);
    }
  };

  updateArtist = async ({ body, headers }: Request, res: Response) => {
    try {
      this.response(res, await this.artistUseCase.updateArtist(body));
    } catch (error) {
      this.response(res, error);
    }
  };

  deleteArtist = async ({ params }: Request, res: Response) => {
    try {
      const { id } = params;
      this.response(res, await this.artistUseCase.deleteArtist(id));
    } catch (error) {
      this.response(res, error);
    }
  };
}
