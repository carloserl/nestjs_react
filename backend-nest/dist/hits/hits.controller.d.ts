/// <reference types="mongoose" />
import { HitsService } from './hits.service';
import { CreateHitDto } from './dto/create-hit.dto';
import { UpdateHitDto } from './dto/update-hit.dto';
export declare class HitsController {
    private readonly hitsService;
    constructor(hitsService: HitsService);
    create(createHitDto: CreateHitDto): Promise<import("../schemas/hit.schema").Hit>;
    findAll(): Promise<import("../schemas/hit.schema").HitDocument[]>;
    findOne(story_id: string): Promise<import("../schemas/hit.schema").HitDocument>;
    update(story_id: string, updateHitDto: UpdateHitDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(story_id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
