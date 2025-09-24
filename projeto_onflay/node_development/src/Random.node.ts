import { INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-workflow';
import fetch from 'node-fetch';

export class Random implements INodeType {
	description: INodeTypeDescription = {
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

	async execute(this: IExecuteFunctions) {
		const items = this.getInputData();

		for (let i = 0; i < items.length; i++) {
			const min = this.getNodeParameter('min', i) as number;
			const max = this.getNodeParameter('max', i) as number;

			const response = await fetch(
				`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`
			);

			const randomNumber = await response.text();

			items[i].json['random'] = parseInt(randomNumber, 10);
		}

		return this.prepareOutputData(items);
	}
}
