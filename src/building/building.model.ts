import * as mongoose from 'mongoose';

export interface Building extends mongoose.Document {
    preview_image_url: string;
    latitude: number;
    longitude: number;
    address: string;
    construction_year: number;
    type_of_use: string;
    tags: object;
    description: string;
    image_urls: object;
    timeline: object;
    audioguides: mongoose.Schema.Types.ObjectId[];
  }

export const BuildingSchema = new mongoose.Schema({
  preview_image_url: { type: String, maxlength: 1024 },
  latitude: { type: Number },
  longitude: { type: Number },
  address: { type: String, maxlength: 255 },
  construction_year: { type: Number },
  type_of_use: { type: String, maxlength: 100 },
  tags: { type: Object },
  description: { type: String },
  image_urls: { type: Object },
  timeline: { type: Object },
  auidioguides: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Audioguide' }],
});
