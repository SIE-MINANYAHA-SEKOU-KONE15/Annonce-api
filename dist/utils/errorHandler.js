"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerError = void 0;
const handlerError = (res, error) => {
    res.status(400).json({ message: error.message });
};
exports.handlerError = handlerError;
