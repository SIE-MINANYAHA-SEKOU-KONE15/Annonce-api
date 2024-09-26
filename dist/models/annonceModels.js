"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Annonce = void 0;
const mongoose_1 = require("mongoose");
const AnnonceSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }],
    category: { type: String, required: true },
    owner: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
}, {
    timestamps: true,
});
exports.Annonce = (0, mongoose_1.model)("Annonce", AnnonceSchema);
