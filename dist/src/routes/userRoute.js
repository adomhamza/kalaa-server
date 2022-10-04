"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/add", userController_1.addUser);
exports.userRouter.post("/track", userController_1.addTrack);
exports.userRouter.post("/getTracks", userController_1.getTracks);
//# sourceMappingURL=userRoute.js.map