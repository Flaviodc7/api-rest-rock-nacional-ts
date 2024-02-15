"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ArtistSchema = new mongoose_1.Schema({
    date_of_birth: {
        type: String
    },
    id: {
        type: String,
        unique: true
    },
    instrument: {
        type: String,
        "enum": ['vocals', 'guitar', 'bass', 'piano', 'drums']
    },
    name: {
        type: String
    },
    nationality: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false,
    _id: false
});
var ArtistModel = (0, mongoose_1.model)('artists', ArtistSchema);
exports["default"] = ArtistModel;
