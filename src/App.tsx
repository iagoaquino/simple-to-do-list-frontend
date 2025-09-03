import { useEffect, useState } from 'react';

import Header from './sub_components/Header';
import Footer from './sub_components/Footer';
import ShowTasks from './sub_components/ShowTasks';
import CreateNewTaskModal from './sub_components/CreateNewTaskModal';
import { PlusIcon } from './components/icon_component/Icon.component';

import { getAllTasksRequest } from './services/api_connection';

import type { TaskInterface } from './interfaces';

import './App.css';
import SearchBar from './sub_components/SearchBar';

function App() {
	const [task_list, setTaskList] = useState<Array<TaskInterface>>([]);
	const [modal_create_task_state, setModalCreateTaskState] = useState<boolean>(false);
	const [search_value, setSearchValue] = useState<string>('');
	const [filtered_task, setFilteredTask] = useState<Array<TaskInterface>>([]);

	const load_tasks = async () => {
		const response = await getAllTasksRequest();
		if (response.success) {
			setTaskList(response.content);
		}
	};

	const search_task = () => {
		setFilteredTask(
			task_list.filter((task) => task.name.toLowerCase().includes(search_value.toLowerCase()))
		);
	};

	useEffect(() => {
		load_tasks();
	}, []);

	useEffect(() => {
		setFilteredTask(task_list);
	}, [task_list]);

	return (
		<div className="main-screen">
			<Header />
			<div style={{ height: '80%', display: 'flex', flexDirection: 'column' }} className="center">
				<SearchBar
					search_value={search_value}
					setSearchValue={setSearchValue}
					searchFunction={search_task}
				/>
				<ShowTasks task_list={filtered_task} />
				<div style={{ padding: 10 }}>
					<button
						className="primary-button"
						onClick={() => {
							setModalCreateTaskState(true);
						}}>
						<PlusIcon width={'50px'} height={'50px'} />
					</button>
				</div>
			</div>
			<Footer />
			<CreateNewTaskModal
				modal_state={modal_create_task_state}
				setModalState={setModalCreateTaskState}
				complementaryFunction={load_tasks}
			/>
		</div>
	);
}

export default App;
