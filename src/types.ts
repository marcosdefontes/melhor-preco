export interface Budget {
	id: string;
	name: string;
	created_at: Date;
	modified_at: Date;
	items?: Item[];
}

export interface Item {
	name: string;
}

export interface Seller {
	id: string;
	name: string;
}
