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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const common_1 = require("@nestjs/common");
let HttpModule = class HttpModule {
    constructor(httpService) {
        this.httpService = httpService;
    }
    onModuleInit() {
        const logger = new common_1.Logger('Axios');
        const axios = this.httpService.axiosRef;
        axios.interceptors.request.use(function (config) {
            config['metadata'] = Object.assign(Object.assign({}, config['metadata']), { startDate: new Date() });
            return config;
        });
        axios.interceptors.response.use((response) => {
            const { config } = response;
            config['metadata'] = Object.assign(Object.assign({}, config['metadata']), { endDate: new Date() });
            const duration = config['metadata'].endDate.getTime() - config['metadata'].startDate.getTime();
            logger.log(`${config.method.toUpperCase()} ${config.url} ${duration}ms`);
            return response;
        }, (err) => {
            logger.error(err);
            return Promise.reject(err);
        });
    }
};
HttpModule = __decorate([
    common_1.Module({
        imports: [
            common_1.HttpModule,
        ],
        exports: [
            common_1.HttpModule,
        ],
    }),
    __metadata("design:paramtypes", [common_1.HttpService])
], HttpModule);
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map