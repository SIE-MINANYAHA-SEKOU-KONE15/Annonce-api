import { AnnonceService } from "../services/annonceService";
import { handlerError } from "../utils/errorHandler";
import { Response, Request } from "express";
import { getUserIdFromToken } from "../utils/helpers";

export class AnnonceController {
  private annonceService: AnnonceService;

  constructor() {
    this.annonceService = new AnnonceService();
  }

  createAnnonce = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = req.header("Authorization")?.replace("Bearer ", "");
      const userId = getUserIdFromToken(token!);
      const annonce = await this.annonceService.createAnnonce({
        ...req.body,
        owner: userId,
      });
      res.status(201).json(annonce);
    } catch (error: any) {
      handlerError(res, error);
    }
  };

  getAnnonce = async (req: Request, res: Response): Promise<void> => {
    try {
      const annonces = await this.annonceService.getAnnonce();
      res.status(201).json(annonces);
    } catch (error: any) {
      handlerError(res, error);
    }
  };

  getAnnonceById = async (req: Request, res: Response): Promise<void> => {
    try {
      const annonce = await this.annonceService.getAnnonceById(req.params.id);
      if (!annonce) {
        res.status(201).json({ message: "annonce non trouvée" });
      }
      res.status(201).json(annonce);
    } catch (error: any) {
      handlerError(res, error);
    }
  };

  updateAnnonce = async (req: Request, res: Response): Promise<void> => {
    try {
      const annonce = await this.annonceService.updateAnnonce(
        req.params.id,
        req.body
      );
      if (!annonce) {
        res.status(201).json({ message: "annonce non trouvée" });
      }
    } catch (error: any) {
      handlerError(res, error);
    }
  };

  deleteAnnonce = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.annonceService.deleteAnnonce(req.params.id);
      res.status(204).send();
    } catch (error: any) {
      handlerError(res, error);
    }
  };
}
