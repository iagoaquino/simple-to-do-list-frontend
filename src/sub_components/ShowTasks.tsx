import { useMemo, useState } from 'react';
import { DateTime } from 'luxon';

import { setTaskAsConcludedRequest } from '../services/api_connection';

import CardComponent from '../components/card_component/Card.component';
import SwitchComponent from '../components/switch_component/Switch.component';

import type { TaskInterface } from '../interfaces';
import { CheckMarkIcon } from '../components/icon_component/Icon.component';
import ModalComponent from '../components/modal_component/Modal.component';

type ShowTasksProps = {
	task_list: Array<TaskInterface>;
	complementaryFunction: () => void;
};

const ShowTasks: React.FC<ShowTasksProps> = ({ task_list, complementaryFunction }) => {
	const [open_modal_confirm, setOpenModalConfirm] = useState<boolean>(false);
	const [check_show_ongoin, setCheckShowOngoin] = useState<boolean>(true);
	const [check_show_concluded, setCheckShowConcluded] = useState<boolean>(false);

	const [selected_task_index, setSelectedTaskIndex] = useState<number | null>();

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
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '80%',
					height: 'auto',
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
							<div style={{ padding: 10, width: '100%', height: 'auto' }}>
								<CardComponent
									style={{ backgroundColor: task.status === 'concluido' ? '#0296b2' : '#ffffff' }}
									size={{ height: 'auto', width: '100%' }}
									components_sizes={{ Header: 'auto', Body: 'auto', Footer: 'auto' }}>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'start',
										}}>
										<h6 style={{ margin: 10 }} className="text-start">
											{task.name}
										</h6>
										<div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
											<div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
												<p style={{ margin: 10 }} className="text-start">
													{task.description ? task.description : 'Sem descrição'}
												</p>
												<div className="text-start" style={{ flex: 1, display: 'flex' }}>
													{task.status === 'em progresso' ? (
														<p className="text-start" style={{ margin: 10 }}>
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
												style={{ flex: 1, padding: 10 }}
												onClick={async () => {
													await setOpenModalConfirm(true);
													setSelectedTaskIndex(index);
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
									</div>
								</CardComponent>
							</div>
						) : (
							<></>
						)
					)}
				</div>
			</div>
			<ModalComponent
				modalOpenState={open_modal_confirm}
				size={{ width: 'auto', height: 'auto' }}
				Header={() => <h4 style={{ margin: 10 }}>Confirmar</h4>}
				Footer={() => (
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<div style={{ padding: 10, flex: 1 }}>
							<button
								className="primary-button"
								onClick={async () => {
									await setTaskAsConcludedRequest(selected_task_index!);
									await complementaryFunction();
									setOpenModalConfirm(false);
								}}>
								Confirmar
							</button>
						</div>
						<div
							style={{ padding: 10, flex: 1 }}
							onClick={() => {
								setOpenModalConfirm(false);
							}}>
							<button className="danger-button">Cancelar</button>
						</div>
					</div>
				)}
				components_sizes={{ Body: 'auto', Footer: 'auto', Header: 'auto' }}>
				<div style={{ padding: 20 }}>
					<p>
						Gostaria de confirmar a conclusão da tarefa "{task_list[selected_task_index!]?.name}"?
					</p>
				</div>
			</ModalComponent>
		</>
	);
};

export default ShowTasks;
