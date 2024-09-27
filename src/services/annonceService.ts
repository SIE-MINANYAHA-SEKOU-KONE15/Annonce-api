import { Annonce, IAnnonce } from "../models/annonceModels";

export class AnnonceService {
  async createAnnonce(data: Partial<IAnnonce>): Promise<IAnnonce> {
    const annonce = await Annonce.create(data);
    return annonce;
  }

  async getAnnonce(): Promise<IAnnonce[]> {
    const annonces = await Annonce.find();
    return annonces;
  }

  async getAnnonceById(id: string): Promise<IAnnonce | null> {
    return Annonce.findById(id).populate("owner");
  }

  async updateAnnonce(
    id: string,
    data: Partial<IAnnonce>
  ): Promise<IAnnonce | null> {
    return Annonce.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteAnnonce(id: string): Promise<void> {
    await Annonce.findByIdAndDelete(id);
  }
}
