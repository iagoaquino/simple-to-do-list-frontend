export interface TaskInterface {
	name: string;
	deadline: string | null;
	status: 'concluido' | 'em progresso';
	description: string | null;
}

export interface ApiPatternResponse<T> {
	success: boolean;
	message: string;
	content: T;
}
