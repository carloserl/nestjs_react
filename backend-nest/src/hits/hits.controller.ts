import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { HitsService } from './hits.service';
import { CreateHitDto } from './dto/create-hit.dto';
import { UpdateHitDto } from './dto/update-hit.dto';

@Controller('hits')
export class HitsController {
  constructor(private readonly hitsService: HitsService) {}

  @Post()
  create(@Body() createHitDto: CreateHitDto) {
    return this.hitsService.create(createHitDto);
  }

  @Get()
  findAll() {
    return this.hitsService.findAll();
  }

  @Get(':story_id')
  findOne(@Param('story_id') story_id: string) {
    return this.hitsService.findOne(story_id);
  }

  @Put(':story_id')
  update(@Param('story_id') story_id: string, @Body() updateHitDto: UpdateHitDto) {
    console.log("aquiiiii")
    return this.hitsService.update(story_id, updateHitDto);
  }

  @Delete(':story_id')
  remove(@Param('story_id') story_id: string) {
    return this.hitsService.remove(story_id);
  }
}
