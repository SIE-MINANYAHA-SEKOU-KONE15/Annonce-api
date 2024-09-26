"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnonceService = void 0;
const annonceModels_1 = require("../models/annonceModels");
class AnnonceService {
    async createAnnonce(data) {
        const annonce = await annonceModels_1.Annonce.create(data);
        return annonce;
    }
    async getAnnonce() {
        return await annonceModels_1.Annonce.find().populate("owner");
    }
    async getAnnonceById(id) {
        return annonceModels_1.Annonce.findById(id).populate("owner");
    }
    async updateAnnonce(id, data) {
        return annonceModels_1.Annonce.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteAnnonce(id) {
        await annonceModels_1.Annonce.findByIdAndDelete(id);
    }
}
exports.AnnonceService = AnnonceService;
