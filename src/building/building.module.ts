import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BuildingSchema } from './building.model';
import { BuildingController } from './building.controller';
import { BuildingService } from './building.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Building', schema: BuildingSchema }]),
  ],
  controllers: [BuildingController],
  providers: [BuildingService],
})
export class BuildingModule {}
