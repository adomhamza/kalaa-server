"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    IP: { type: String, required: true },
    meta: { type: String, required: true },
    id: { type: String, required: true },
});
// 3. Create a Model.
exports.User = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=user.js.map