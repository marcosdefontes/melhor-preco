import type { Budget } from '../types';
import type { PageLoad } from './$types';

export const load = (async () => {
	const data: Budget[] = [
		{
			id: '5YT5vqST4mjsfyc',
			name: 'Gorgeous Wooden Chips',
			created_at: new Date(),
			modified_at: new Date()
		},
		{
			id: 'wOxeKqrgPcMEiKy',
			name: 'Incredible Cotton Shoes',
			created_at: new Date(),
			modified_at: new Date()
		},
		{
			id: 'hu3gmIYmLmPvshO',
			name: 'Wooden Bike',
			created_at: new Date(),
			modified_at: new Date()
		}
	];
	return { budgets: data };
}) satisfies PageLoad;
