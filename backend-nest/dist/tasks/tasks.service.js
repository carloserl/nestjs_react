"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TasksService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const hit_schema_1 = require("../schemas/hit.schema");
const hits_service_1 = require("../hits/hits.service");
const common_2 = require("@nestjs/common");
let TasksService = TasksService_1 = class TasksService {
    constructor(httpService, hitsService) {
        this.httpService = httpService;
        this.hitsService = hitsService;
        this.logger = new common_1.Logger(TasksService_1.name);
    }
    async handleCron() {
        const response = await this.httpService.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs').toPromise();
        response.data.hits.forEach(async (element) => {
            if (element.story_id != null) {
                const exist = await this.hitsService.findOne(element.story_id);
                try {
                    if (exist == null) {
                        const createHitDto = {
                            "story_id": element.story_id,
                            "story_title": element.story_title,
                            "created_at": element.created_at,
                            "author": element.author,
                            "comment_text": element.comment_text,
                            "story_url": element.story_url,
                            "delete_state": "false"
                        };
                        this.hitsService.create(createHitDto);
                    }
                    else {
                        console.log("exist ", element.story_id);
                    }
                }
                catch (error) {
                }
            }
        });
    }
};
__decorate([
    schedule_1.Cron('45 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "handleCron", null);
TasksService = TasksService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_2.HttpService,
        hits_service_1.HitsService])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map