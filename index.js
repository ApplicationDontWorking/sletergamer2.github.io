"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "build", 'index.html'));
});
app.post('/escribenos', (req, res) => {
    let data = '';
    req.on('data', chunk => {
        data += chunk.toString();
    });
    req.on('end', () => {
        console.log('JSON recibido:', data);
        res.send(data);
    });
});
app.listen(port, () => {
    console.log("El servidor se a ejecutado con el puerto:", port);
});
