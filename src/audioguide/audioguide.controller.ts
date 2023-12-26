import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { AudioguideService } from './audioguide.service';
import { Audioguide } from './audioguide.model';

@Controller('audioguides')
export class AudioguideController {
  constructor(private readonly audioguideService: AudioguideService) {}

  @Post()
  async create(@Body() audioguide: Audioguide): Promise<Audioguide> {
    return this.audioguideService.create(audioguide);
  }

  @Get()
  async findAll(): Promise<Audioguide[]> {
    return this.audioguideService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Audioguide> {
    return this.audioguideService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() audioguide: Audioguide,
  ): Promise<Audioguide> {
    return this.audioguideService.update(id, audioguide);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Audioguide> {
    return this.audioguideService.delete(id);
  }
}
