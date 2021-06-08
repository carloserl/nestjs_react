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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitsController = void 0;
const common_1 = require("@nestjs/common");
const hits_service_1 = require("./hits.service");
const create_hit_dto_1 = require("./dto/create-hit.dto");
const update_hit_dto_1 = require("./dto/update-hit.dto");
let HitsController = class HitsController {
    constructor(hitsService) {
        this.hitsService = hitsService;
    }
    create(createHitDto) {
        return this.hitsService.create(createHitDto);
    }
    findAll() {
        return this.hitsService.findAll();
    }
    findOne(story_id) {
        return this.hitsService.findOne(story_id);
    }
    update(story_id, updateHitDto) {
        console.log("aquiiiii");
        return this.hitsService.update(story_id, updateHitDto);
    }
    remove(story_id) {
        return this.hitsService.remove(story_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hit_dto_1.CreateHitDto]),
    __metadata("design:returntype", void 0)
], HitsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HitsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':story_id'),
    __param(0, common_1.Param('story_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HitsController.prototype, "findOne", null);
__decorate([
    common_1.Put(':story_id'),
    __param(0, common_1.Param('story_id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_hit_dto_1.UpdateHitDto]),
    __metadata("design:returntype", void 0)
], HitsController.prototype, "update", null);
__decorate([
    common_1.Delete(':story_id'),
    __param(0, common_1.Param('story_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HitsController.prototype, "remove", null);
HitsController = __decorate([
    common_1.Controller('hits'),
    __metadata("design:paramtypes", [hits_service_1.HitsService])
], HitsController);
exports.HitsController = HitsController;
//# sourceMappingURL=hits.controller.js.map