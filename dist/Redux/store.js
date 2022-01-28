"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const reducers_1 = __importDefault(require("./reducers"));
const store = (0, redux_1.createStore)(reducers_1.default, (0, redux_1.applyMiddleware)(redux_thunk_1.default));
exports.default = store;
//# sourceMappingURL=store.js.map