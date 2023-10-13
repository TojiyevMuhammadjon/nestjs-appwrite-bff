import mongoose from "mongoose";

const olxSchemaResponseSchema = new mongoose.Schema({
  address: { type: String, required: true },
  bathroom: {
    type: String,
    required: true,
    enum: ["2 и более", "Совмещенный", "Раздельный"],
  },
  building: {
    type: String,
    required: true,
    enum: ["Деревянный", "Блочный", "Монолитный", "Панельный", "Кирпичный"],
  },
  ceiling_height: { type: Number, required: true },
  contact_additional_phone_number: { type: String, required: true },
  contact_email: { type: String, required: true },
  contact_first_name: { type: String, required: true },
  contact_last_name: { type: String, required: true },
  contact_phone_number: { type: String, required: true },
  contact_surname: { type: String, required: true },
  currency: {
    type: String,
    required: true,
    enum: ["UZS", "USD", "EUR"],
  },
  description: { type: String, required: true },
  distance_to_metro: { type: Number, required: true },
  floor: { type: Number, required: true },
  floors_of_house: { type: Number, required: true },
  housing: {
    type: String,
    required: true,
    enum: ["Новостройка", "Вторичный рынок"],
  },
  images: [String],
  is_commission: { type: Boolean, required: true },
  is_exchange: { type: Boolean, required: true },
  is_furnished: { type: Boolean, required: true },
  kitchen_area: { type: Number, required: true },
  landmark: { type: String, required: true },
  layout: {
    type: String,
    required: true,
    enum: [
      "Малосемейка",
      "МногоУровневая",
      "Пентхаус",
      "Студия",
      "Смежно-Раздельная",
      "Раздельная",
      "Смежная",
    ],
  },
  living_space: { type: Number, required: true },
  metro: {
    type: String,
    required: true,
    enum: [
      "Чиланзар",
      "Олмазор",
      "Мирзо Улугбек",
      "Новза",
      "Миллий бог",
      // ... (other metro stations)
    ],
  },
  number_of_rooms: { type: Number, required: true },
  internal_id: { type: Number, required: true },
  olx_url: { type: String, required: true },
  phone_number: { type: String, required: true },
  price: { type: Number, required: true },
  repair: {
    type: String,
    required: true,
    enum: [
      "Предчистовая Отделка",
      "Черновая Отделка",
      "Требуется Ремонт",
      "Средний Ремонт",
      "ЕвроРемонт",
      "Авторский Проект",
    ],
  },
  title: { type: String, required: true },
  total_area: { type: Number, required: true },
  type: {
    type: String,
    required: true,
    enum: ["Продажа", "Аренда", "Обмен", "Посуточная аренда"],
  },
  year_construction: { type: Number, required: true },
});

const OlxSchemaResponse = mongoose.model(
  "OlxSchemaResponse",
  olxSchemaResponseSchema
);

export default OlxSchemaResponse;
