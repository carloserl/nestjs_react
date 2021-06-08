import { Model } from 'mongoose';
import { Hit, HitDocument } from 'src/schemas/hit.schema';
import { CreateHitDto } from './dto/create-hit.dto';
import { UpdateHitDto } from './dto/update-hit.dto';
export declare class HitsService {
    private hitModel;
    constructor(hitModel: Model<HitDocument>);
    create(createHitDto: CreateHitDto): Promise<Hit>;
    findAll(): Promise<HitDocument[]>;
    findOne(story_id: string): Promise<HitDocument>;
    update(story_id: string, updateHitDto: UpdateHitDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(story_id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
