"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const appScreenLoader_reducers_1 = __importDefault(require("./appScreenLoader.reducers"));
const user_reducers_1 = __importDefault(require("./user.reducers"));
exports.default = (0, redux_1.combineReducers)({
    appScreenLoader: appScreenLoader_reducers_1.default,
    user: user_reducers_1.default
});
//# sourceMappingURL=index.js.map