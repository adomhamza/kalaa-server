"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTracks = exports.addTrack = exports.addUser = void 0;
const user_1 = require("../../Database/models/user");
function addUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { IP, meta } = req.body;
            // res.status(200).send(req.body);
            const user = new user_1.User({
                IP,
                meta,
            });
            yield user.save();
            res.send("Tacking successful");
        }
        catch (error) {
            throw error;
        }
    });
}
exports.addUser = addUser;
function addTrack(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { IP, meta, id } = req.body;
            // res.status(200).send(req.body);
            const user = new user_1.User({
                IP,
                meta,
                id,
            });
            yield user.save();
            res.send("Tacking successful");
        }
        catch (error) {
            throw error;
        }
    });
}
exports.addTrack = addTrack;
function getTracks(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { IP, meta, id } = req.body;
            // res.status(200).send(req.body);
            const user = yield user_1.User.find({
                IP,
            }).exec();
            res.send(user);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getTracks = getTracks;
//# sourceMappingURL=userController.js.map