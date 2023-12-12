import * as mongoose from 'mongoose';

export interface Audioguide extends mongoose.Document {
  title: string;
  audio_url: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  // Other fields or relations if needed
}

export const AudioguideSchema = new mongoose.Schema({
  title: { type: String, maxlength: 255 },
  audio_url: { type: String },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },

  // Other fields or relations if needed
  // created_by is a ForeignKey and Ignore for now.
});
