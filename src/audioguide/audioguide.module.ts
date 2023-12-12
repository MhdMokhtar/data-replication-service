import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AudioguideSchema } from './audioguide.model';
import { AudioguideService } from './audioguide.service';
import { AudioguideController } from './audioguide.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Audioguide', schema: AudioguideSchema },
    ]),
  ],
  controllers: [AudioguideController],
  providers: [AudioguideService],
})
export class AudioguideModule {}
