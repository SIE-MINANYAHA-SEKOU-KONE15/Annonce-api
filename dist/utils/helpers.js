"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserIdFromToken = exports.formatResponse = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const formatResponse = (statusCode, data, message) => {
    return {
        status: statusCode,
        data: data,
        message: message,
    };
};
exports.formatResponse = formatResponse;
const getUserIdFromToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        return decoded._id; // Assurez-vous que l'objet décodé contient bien l'ID
    }
    catch (error) {
        console.error("Invalid token", error);
        return null;
    }
};
exports.getUserIdFromToken = getUserIdFromToken;
