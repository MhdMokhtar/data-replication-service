import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Building } from './building.model';

@Injectable()
export class BuildingService {
  constructor(
    @InjectModel('Building') private readonly buildingModel: Model<Building>,
  ) {}

  async create(building: Building): Promise<Building> {
    const newBuilding = new this.buildingModel(building);
    return newBuilding.save();
  }

  async findAll(): Promise<Building[]> {
    return this.buildingModel.find().exec();
  }

  async findOne(id: string): Promise<Building> {
    return this.buildingModel.findById(id).exec();
  }

  async update(id: string, building: Building): Promise<Building> {
    return this.buildingModel
      .findByIdAndUpdate(id, building, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Building> {
    return this.buildingModel.findByIdAndUpdate(id, { isDeleted: true });
  }
}
