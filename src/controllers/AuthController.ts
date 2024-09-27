import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { formatResponse } from "../utils/helpers";
import { Annonce } from "../models/annonceModels";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }
  register = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password } = req.body;

    try {
      const user = await this.authService.register(username, email, password);
      res.status(201).json(formatResponse(201, "success", user));
    } catch (error: any) {
      res.status(500).json(
        formatResponse(500, "", {
          errorMessage: error.message,
          stack: error.stack,
        })
      );
    }
  };
  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const token = await this.authService.login(email, password);
      res
        .status(201)
        .json(formatResponse(201, token, "authentification !!!!!!"));
    } catch (error) {}
  };
}
