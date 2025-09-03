export interface TaskInterface {
	name: string;
	deadline: string | null;
	description: string | null;
}

export interface ApiPatternResponse<T> {
	success: boolean;
	message: string;
	content: T;
}
