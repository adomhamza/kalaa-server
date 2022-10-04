"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const connector_1 = require("./utils/db/connector");
const userRoute_1 = require("./routes/userRoute");
const app = (0, express_1.default)();
const port = 5050;
app.use((0, cors_1.default)({ origin: "*" }));
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/user", userRoute_1.userRouter);
/** Error handling */
app.use((req, res, next) => {
    const error = new Error("not found");
    return res.status(404).json({
        message: error.message,
    });
});
(0, connector_1.main)()
    .then(() => app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
}))
    .catch((e) => console.error(e));
//# sourceMappingURL=app.js.map