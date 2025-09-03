import CardComponent from '../components/card_component/Card.component';
import type { TaskInterface } from '../interfaces';
import { DateTime } from 'luxon';

type ShowTasksProps = {
	task_list: Array<TaskInterface>;
};

const ShowTasks: React.FC<ShowTasksProps> = ({ task_list }) => {
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
				height: '500px',
				overflowY: 'scroll',
				alignItems: 'center',
				width: '80%',
			}}>
			{task_list.map((task) => (
				<div style={{ padding: 10, width: '100%', height: 'auto', flexShrink: 1 }}>
					<CardComponent
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
									<p className="text-center" style={{ margin: 10 }}>
										{task.deadline === null
											? 'Sem prazo estipulado'
											: `Faltam: ${show_ramaining_time(
													task.deadline
											  )} dias para o prazo final dessa tarefa`}
									</p>
								</div>
							</div>
						</div>
					</CardComponent>
				</div>
			))}
		</div>
	);
};

export default ShowTasks;
