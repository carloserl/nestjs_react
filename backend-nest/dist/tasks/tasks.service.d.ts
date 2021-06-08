import { HitsService } from '../hits/hits.service';
import { HttpService } from '@nestjs/common';
export declare class TasksService {
    private readonly httpService;
    private readonly hitsService;
    private readonly logger;
    constructor(httpService: HttpService, hitsService: HitsService);
    handleCron(): Promise<void>;
}
