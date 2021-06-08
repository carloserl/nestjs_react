"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHitDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_hit_dto_1 = require("./create-hit.dto");
class UpdateHitDto extends mapped_types_1.PartialType(create_hit_dto_1.CreateHitDto) {
}
exports.UpdateHitDto = UpdateHitDto;
//# sourceMappingURL=update-hit.dto.js.map