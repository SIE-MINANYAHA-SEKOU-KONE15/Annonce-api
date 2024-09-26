"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnonceController = void 0;
const annonceService_1 = require("../services/annonceService");
const errorHandler_1 = require("../utils/errorHandler");
const helpers_1 = require("../utils/helpers");
class AnnonceController {
    constructor() {
        this.createAnnonce = async (req, res) => {
            try {
                const token = req.header("Authorization")?.replace("Bearer ", "");
                const userId = (0, helpers_1.getUserIdFromToken)(token);
                const annonce = await this.annonceService.createAnnonce({
                    ...req.body,
                    owner: userId,
                });
                res.status(201).json(annonce);
            }
            catch (error) {
                (0, errorHandler_1.handlerError)(res, error);
            }
        };
        this.getAnnonce = async (req, res) => {
            try {
                const annonces = await this.annonceService.getAnnonce();
                res.status(201).json(annonces);
            }
            catch (error) {
                (0, errorHandler_1.handlerError)(res, error);
            }
        };
        this.getAnnonceById = async (req, res) => {
            try {
                const annonce = await this.annonceService.getAnnonceById(req.params.id);
                if (!annonce) {
                    res.status(201).json({ message: "annonce non trouvée" });
                }
                res.status(201).json(annonce);
            }
            catch (error) {
                (0, errorHandler_1.handlerError)(res, error);
            }
        };
        this.updateAnnonce = async (req, res) => {
            try {
                const annonce = await this.annonceService.updateAnnonce(req.params.id, req.body);
                if (!annonce) {
                    res.status(201).json({ message: "annonce non trouvée" });
                }
            }
            catch (error) {
                (0, errorHandler_1.handlerError)(res, error);
            }
        };
        this.deleteAnnonce = async (req, res) => {
            try {
                await this.annonceService.deleteAnnonce(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                (0, errorHandler_1.handlerError)(res, error);
            }
        };
        this.annonceService = new annonceService_1.AnnonceService();
    }
}
exports.AnnonceController = AnnonceController;
