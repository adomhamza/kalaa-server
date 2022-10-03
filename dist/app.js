"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connector_1 = require("./utils/db/connector");
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
(0, connector_1.main)()
    .then(() => app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
}))
    .catch((e) => console.error(e));
//# sourceMappingURL=app.js.map