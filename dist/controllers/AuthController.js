"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AuthService_1 = require("../services/AuthService");
const helpers_1 = require("../utils/helpers");
class AuthController {
    constructor() {
        this.register = async (req, res) => {
            const { username, email, password } = req.body;
            try {
                const user = await this.authService.register(username, email, password);
                res.status(201).json((0, helpers_1.formatResponse)(201, user, "User create"));
            }
            catch (error) {
                res.status(500).json((0, helpers_1.formatResponse)(500, [], "error"));
            }
        };
        this.login = async (req, res) => {
            try {
                const { email, password } = req.body;
                const token = await this.authService.login(email, password);
                res
                    .status(201)
                    .json((0, helpers_1.formatResponse)(201, token, "authentification !!!!!!"));
            }
            catch (error) { }
        };
        this.authService = new AuthService_1.AuthService();
    }
}
exports.AuthController = AuthController;
