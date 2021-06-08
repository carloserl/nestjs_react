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
exports.HitsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const hit_schema_1 = require("../schemas/hit.schema");
const mongoose_2 = require("@nestjs/mongoose");
let HitsService = class HitsService {
    constructor(hitModel) {
        this.hitModel = hitModel;
    }
    async create(createHitDto) {
        return new this.hitModel(createHitDto).save();
    }
    async findAll() {
        return this.hitModel.find();
    }
    async findOne(story_id) {
        return this.hitModel.findOne({ story_id });
    }
    async update(story_id, updateHitDto) {
        console.log("llegue aqui", updateHitDto);
        return this.hitModel.updateOne({ story_id }, { $set: Object.assign({}, updateHitDto) });
    }
    async remove(story_id) {
        return this.hitModel.deleteOne({ story_id });
    }
};
HitsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(hit_schema_1.Hit.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], HitsService);
exports.HitsService = HitsService;
//# sourceMappingURL=hits.service.js.map