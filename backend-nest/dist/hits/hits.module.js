"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitsModule = void 0;
const common_1 = require("@nestjs/common");
const hits_service_1 = require("./hits.service");
const hits_controller_1 = require("./hits.controller");
const hit_schema_1 = require("../schemas/hit.schema");
const mongoose_1 = require("@nestjs/mongoose");
let HitsModule = class HitsModule {
};
HitsModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: hit_schema_1.Hit.name, schema: hit_schema_1.HitSchema }])],
        controllers: [hits_controller_1.HitsController],
        providers: [hits_service_1.HitsService],
        exports: [hits_service_1.HitsService]
    })
], HitsModule);
exports.HitsModule = HitsModule;
//# sourceMappingURL=hits.module.js.map