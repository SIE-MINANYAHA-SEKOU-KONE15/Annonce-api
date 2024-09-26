import { Router } from "express";
import { authMiddlewares } from "../middlewares/authMiddlewares";
import { AnnonceController } from "../controllers/annonceController";

const router = Router();
const annonceController = new AnnonceController();

router.post("/", authMiddlewares, annonceController.createAnnonce);
router.get("/", annonceController.getAnnonce);
router.get("/:id", annonceController.getAnnonceById);
router.put("/:id", authMiddlewares, annonceController.updateAnnonce);
router.delete("/:id", authMiddlewares, annonceController.deleteAnnonce);

export default router;
