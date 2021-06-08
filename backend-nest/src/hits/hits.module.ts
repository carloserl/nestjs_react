import { Module } from '@nestjs/common';
import { HitsService } from './hits.service';
import { HitsController } from './hits.controller';
import { Hit, HitSchema } from 'src/schemas/hit.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Hit.name, schema: HitSchema }])],
  controllers: [HitsController],
  providers: [HitsService],
  exports: [HitsService]
})
export class HitsModule {}
