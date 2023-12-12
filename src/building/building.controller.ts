import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { Building } from './building.model';
import { BuildingService } from './building.service';

@Controller('buildings')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Post()
  async create(@Body() building: Building): Promise<Building> {
    return this.buildingService.create(building);
  }

  @Get()
  async findAll(): Promise<Building[]> {
    return this.buildingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Building> {
    return this.buildingService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() building: Building,
  ): Promise<Building> {
    return this.buildingService.update(id, building);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Building> {
    return this.buildingService.delete(id);
  }
}
