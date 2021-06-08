import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Hit, HitDocument } from 'src/schemas/hit.schema';
import { CreateHitDto } from './dto/create-hit.dto';
import { UpdateHitDto } from './dto/update-hit.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HitsService {

  constructor(@InjectModel(Hit.name) private hitModel: Model<HitDocument>) {}

  async create(createHitDto: CreateHitDto) : Promise<Hit> {
    return new this.hitModel(createHitDto).save();
  }

  async findAll() {
    return this.hitModel.find()
  }

  async findOne(story_id: string) {
    return this.hitModel.findOne({story_id})
  }

  async update(story_id: string, updateHitDto: UpdateHitDto) {
    console.log("llegue aqui",updateHitDto)
    return this.hitModel.updateOne({story_id},{$set : {...updateHitDto}})
  }

  async remove(story_id: string) {
    return this.hitModel.deleteOne({story_id})
  }
}
