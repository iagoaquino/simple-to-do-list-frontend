import axios from 'axios';
import type { ApiPatternResponse, TaskInterface } from '../interfaces';

const api = axios.create({ baseURL: 'http://localhost:3000' });

export async function get_all_tasks_request(): Promise<ApiPatternResponse<Array<TaskInterface>>> {
	const response = await api.get('tasks');
	return response.data;
}

export async function insert_new_task_request(
	task: TaskInterface
): Promise<ApiPatternResponse<null>> {
	const response = await api.post('tasks', task);
	return response.data;
}
