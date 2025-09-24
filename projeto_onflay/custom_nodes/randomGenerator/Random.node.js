"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class Random {
    constructor() {
        this.description = {
            displayName: 'Random',
            name: 'random',
            group: ['transform'],
            version: 1,
            description: 'Get a random number from random.org',
            defaults: {
                name: 'Random',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Min Value',
                    name: 'min',
                    type: 'number',
                    default: 1,
                },
                {
                    displayName: 'Max Value',
                    name: 'max',
                    type: 'number',
                    default: 100,
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        for (let i = 0; i < items.length; i++) {
            const min = this.getNodeParameter('min', i);
            const max = this.getNodeParameter('max', i);
            const response = await (0, node_fetch_1.default)(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`);
            const randomNumber = await response.text();
            items[i].json['random'] = parseInt(randomNumber, 10);
        }
        return this.prepareOutputData(items);
    }
}
exports.Random = Random;
