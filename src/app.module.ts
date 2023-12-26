import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingModule } from './building/building.module';
import { AudioguideModule } from './audioguide/audioguide.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    BuildingModule,
    AudioguideModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
