import type { Budget } from '../types';
import type { PageLoad } from './$types';

export const load = (async () => {
	const data: Budget[] = [
		{
			name: 'Gorgeous Wooden Chips',
			created_at: new Date(),
			modified_at: new Date()
		},
		{
			name: 'Incredible Cotton Shoes',
			created_at: new Date(),
			modified_at: new Date()
		},
		{
			name: 'Wooden Bike',
			created_at: new Date(),
			modified_at: new Date()
		}
	];
	return { budgets: data };
}) satisfies PageLoad;
