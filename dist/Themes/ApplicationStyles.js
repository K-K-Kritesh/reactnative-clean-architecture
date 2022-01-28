"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Metrics_1 = __importDefault(require("./Metrics"));
const Colors_1 = __importDefault(require("./Colors"));
// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android
const ApplicationStyles = {
    screenContainer: {
        flex: 1,
        paddingHorizontal: Metrics_1.default.doubleBaseMargin - 5,
    },
    container: {
        flex: 1,
        backgroundColor: Colors_1.default.primary,
    },
    shadowContainer: {
        shadowColor: Colors_1.default.lightGrey,
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.75,
        shadowRadius: 1,
        //backgroundColor: Colors.white,
        elevation: 2, // Android
    },
};
exports.default = ApplicationStyles;
//# sourceMappingURL=ApplicationStyles.js.map