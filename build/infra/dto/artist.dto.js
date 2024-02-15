"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Update_Artist_Dto = exports.SchemaUpdateArtist = exports.Create_Artist_Dto = exports.SchemaCreateArtist = void 0;
var joi_1 = __importDefault(require("joi"));
exports.SchemaCreateArtist = joi_1["default"].object({
    date_of_birth: joi_1["default"].string().required(),
    instrument: joi_1["default"].string().valid('vocals', 'guitar', 'bass', 'piano', 'drums').required(),
    name: joi_1["default"].string().required(),
    nationality: joi_1["default"].string().required()
});
function Create_Artist_Dto(req, res, next) {
    var error = exports.SchemaCreateArtist.validate(req.body).error;
    if (error) {
        return res.status(400).json({
            status: 400,
            message: 'Invalid DTO',
            data: error.details[0].message
        });
    }
    next();
}
exports.Create_Artist_Dto = Create_Artist_Dto;
exports.SchemaUpdateArtist = joi_1["default"].object({
    date_of_birth: joi_1["default"].string().optional(),
    id: joi_1["default"].string().required(),
    instrument: joi_1["default"].string().valid('vocals', 'guitar', 'bass', 'piano', 'drums').required(),
    name: joi_1["default"].string().optional(),
    nationality: joi_1["default"].string().optional()
});
function Update_Artist_Dto(req, res, next) {
    var error = exports.SchemaUpdateArtist.validate(req.body).error;
    if (error) {
        return res.status(400).json({
            status: 400,
            message: 'Invalid DTO',
            data: error.details[0].message
        });
    }
    next();
}
exports.Update_Artist_Dto = Update_Artist_Dto;
