"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const UserModels_1 = require("../models/UserModels");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    constructor() {
        this.register = async (username, email, password) => {
            const user = await UserModels_1.User.create({ username, email, password });
            return user;
        };
        this.login = async (email, password) => {
            const user = await UserModels_1.User.findOne({ email });
            if (!user) {
                throw new Error("user don't exist");
            }
            const isMatched = await user.matchPassword(password);
            if (!isMatched) {
                throw new Error("invalid email or password");
            }
            const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "1h",
            });
            return token;
        };
    }
}
exports.AuthService = AuthService;
