"use strict";
exports.__esModule = true;
exports.ApiController = void 0;
var httpstatus_1 = require("./httpstatus");
var ApiController = /** @class */ (function () {
    function ApiController() {
    }
    ApiController.prototype.response = function (res, data) {
        var _a, _b, _c;
        if (data.status >= 200 && data.status < 400) {
            console.info(data);
        }
        else {
            console.error(data);
        }
        return res.status((_a = data.status) !== null && _a !== void 0 ? _a : 500).send({
            status: (_b = data.status) !== null && _b !== void 0 ? _b : 500,
            message: (0, httpstatus_1.RespuestaDeCodigo)(data.status),
            data: (_c = data.data) !== null && _c !== void 0 ? _c : data
        });
    };
    return ApiController;
}());
exports.ApiController = ApiController;
