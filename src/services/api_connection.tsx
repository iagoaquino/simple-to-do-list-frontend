import axios from 'axios';
import type { ApiPatternResponse, TaskInterface } from '../interfaces';

const api = axios.create({ baseURL: 'http://localhost:3000' });

export async function getAllTasksRequest(): Promise<ApiPatternResponse<Array<TaskInterface>>> {
	const response = await api.get('tasks');
	return response.data;
}

export async function insertNewTaskRequest(task: TaskInterface): Promise<ApiPatternResponse<null>> {
	const response = await api.post('tasks', task);
	return response.data;
}

export async function setTaskAsConcludedRequest(id: number): Promise<ApiPatternResponse<null>> {
	const response = await api.patch(`tasks/${id}/done`);
	return response.data;
}
