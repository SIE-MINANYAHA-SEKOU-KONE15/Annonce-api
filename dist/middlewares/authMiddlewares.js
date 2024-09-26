"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddlewares = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserModels_1 = require("../models/UserModels");
const authMiddlewares = async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const user = await UserModels_1.User.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};
exports.authMiddlewares = authMiddlewares;
