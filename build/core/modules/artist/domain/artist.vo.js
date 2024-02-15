"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ArtistOValue = void 0;
var uuid_1 = require("uuid");
var ArtistOValue = /** @class */ (function () {
    function ArtistOValue() {
        this.create = function (payload) {
            return __assign(__assign({}, payload), { id: (0, uuid_1.v4)() });
        };
        this.update = function (payload) {
            return __assign({}, payload);
        };
    }
    return ArtistOValue;
}());
exports.ArtistOValue = ArtistOValue;
