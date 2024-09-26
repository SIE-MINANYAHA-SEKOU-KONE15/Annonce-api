import { Schema, model, Document } from "mongoose";

export interface IAnnonce extends Document {
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  owner: Schema.Types.ObjectId;
}

const AnnonceSchema = new Schema<IAnnonce>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }],
    category: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

export const Annonce = model<IAnnonce>("Annonce", AnnonceSchema);
