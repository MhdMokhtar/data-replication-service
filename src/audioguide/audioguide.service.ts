import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Audioguide } from './audioguide.model';

@Injectable()
export class AudioguideService {
  constructor(
    @InjectModel('Audioguide')
    private readonly audioguideModel: Model<Audioguide>,
  ) {}

  async create(audioguide: Audioguide): Promise<Audioguide> {
    const createdAudioguide = new this.audioguideModel(audioguide);
    return createdAudioguide.save();
  }

  async findAll(): Promise<Audioguide[]> {
    return this.audioguideModel.find().exec();
  }

  async findOne(id: string): Promise<Audioguide> {
    return this.audioguideModel.findById(id).exec();
  }

  async update(id: string, audioguide: Audioguide): Promise<Audioguide> {
    return this.audioguideModel
      .findByIdAndUpdate(id, audioguide, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Audioguide> {
    return this.audioguideModel.findByIdAndUpdate(id, { isDeleted: true });
  }
}
