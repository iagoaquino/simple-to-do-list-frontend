import { useMemo, useState } from 'react';
import { DateTime } from 'luxon';

import { setTaskAsConcludedRequest } from '../services/api_connection';

import CardComponent from '../components/card_component/Card.component';
import SwitchComponent from '../components/switch_component/Switch.component';

import type { TaskInterface } from '../interfaces';
import { CheckMarkIcon } from '../components/icon_component/Icon.component';

type ShowTasksProps = {
	task_list: Array<TaskInterface>;
	complementaryFunction: () => void;
};

const ShowTasks: React.FC<ShowTasksProps> = ({ task_list, complementaryFunction }) => {
	const [check_show_ongoin, setCheckShowOngoin] = useState<boolean>(true);
	const [check_show_concluded, setCheckShowConcluded] = useState<boolean>(false);

	const filter_list: Array<string> = useMemo(() => {
		const filter = [];
		if (check_show_ongoin) filter.push('em progresso');
		if (check_show_concluded) filter.push('concluido');
		return filter;
	}, [check_show_ongoin, check_show_concluded]);

	const show_ramaining_time = (deadline: string) => {
		const iso_deadline = DateTime.fromFormat(deadline, 'dd/MM/yyyy');
		const today = DateTime.now();
		return iso_deadline.startOf('day').diff(today.startOf('day'), 'days').days;
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '80%',
			}}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<SwitchComponent
					style={{ margin: 10 }}
					input_name="Mostrar em progresso"
					checked={check_show_ongoin}
					setCheckedState={setCheckShowOngoin}
				/>
				<SwitchComponent
					style={{ margin: 10 }}
					input_name="Mostrar concluido"
					checked={check_show_concluded}
					setCheckedState={setCheckShowConcluded}
				/>
			</div>
			<div style={{ width: '100%', height: '400px', overflowY: 'scroll' }}>
				{task_list.map((task, index) =>
					filter_list.includes(task.status) ? (
						<div style={{ padding: 10, width: '100%', height: 'auto', flexShrink: 1 }}>
							<CardComponent
								style={{ backgroundColor: task.status === 'concluido' ? '#0296b2' : '#ffffff' }}
								size={{ height: 'auto', width: '100%' }}
								components_sizes={{ Header: 'auto', Body: 'auto', Footer: 'auto' }}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'start',
									}}>
									<div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
										<h4 style={{ margin: 10 }} className="text-start">
											{task.name}
										</h4>
										<p style={{ margin: 10 }} className="text-start">
											{task.description ? task.description : 'Sem descrição'}
										</p>
										<div className="text-start" style={{ flex: 1, display: 'flex' }}>
											{task.status === 'em progresso' ? (
												<p className="text-center" style={{ margin: 10 }}>
													{task.deadline === null
														? 'Sem prazo estipulado'
														: `Faltam: ${show_ramaining_time(
																task.deadline
														  )} dias para o prazo final dessa tarefa`}
												</p>
											) : (
												<></>
											)}
										</div>
									</div>
									<div
										style={{ flex: 1 }}
										onClick={async () => {
											await setTaskAsConcludedRequest(index);
											await complementaryFunction();
										}}>
										{task.status === 'em progresso' ? (
											<button className="primary-button">Concluir</button>
										) : (
											<button className="primary-button" disabled>
												<CheckMarkIcon width={'20px'} height={'20px'} />
											</button>
										)}
									</div>
								</div>
							</CardComponent>
						</div>
					) : (
						<></>
					)
				)}
			</div>
		</div>
	);
};

export default ShowTasks;
