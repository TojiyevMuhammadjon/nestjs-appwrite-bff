const mongoose = require("mongoose");

const olxParseRequestSchema = new mongoose.Schema({
  area_from: { type: Number, required: true },
  area_to: { type: Number, required: true },
  flat_type: {
    type: String,
    required: true,
    enum: ["Все объявления", "Аренда долгосрочная", "Продажа", "Обмен"],
  },
  floor_from: { type: Number, required: true },
  floor_to: { type: Number, required: true },
  floors_of_house: { type: Number, required: true },
  price_from: { type: Number, required: true },
  price_to: { type: Number, required: true },
  region: {
    type: String,
    required: true,
    enum: [
      "Андижанская область",
      "Бухарская область",
      "Джизакская область",
      "Каракалпакстан",
      "Кашкадарьинская область",
      "Навоийская область",
      "Наманганская область",
      "Самаркандская область",
      "Сурхандарьинская область",
      "Сырдарьинская область",
      "Ташкентская область",
      "Ташкент город",
      "Ферганская область",
      "Хорезмская область",
    ],
  },
  rooms_from: { type: Number, required: true },
  rooms_to: { type: Number, required: true },
  type: {
    type: String,
    required: true,
    enum: ["Все объявления", "Бизнес", "Частный"],
  },
});

const OlxParseRequest = mongoose.model(
  "OlxParseRequest",
  olxParseRequestSchema
);

module.exports = OlxParseRequest;
