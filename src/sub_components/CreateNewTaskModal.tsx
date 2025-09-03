import { useMemo, useState } from 'react';
import { DateTime } from 'luxon';

import InputComponent from '../components/input_component/Input.component';
import ModalComponent from '../components/modal_component/Modal.component';
import TextAreaComponent from '../components/text_area_component/TextArea.component';
import SwitchComponent from '../components/switch_component/Switch.component';

import { insert_new_task_request } from '../services/api_connection';
import type { TaskInterface } from '../interfaces';

type CreateNewTaskModalProps = {
	modal_state: boolean;
	setModalState: (value: boolean) => void;
	complementaryFunction: () => void;
};

const CreateNewTaskModal: React.FC<CreateNewTaskModalProps> = ({
	modal_state,
	setModalState,
	complementaryFunction,
}) => {
	const [name_input, setNameInput] = useState<string | undefined>();
	const [description_input, setDescriptionInput] = useState<string | null>(null);
	const [data_input, setDataInput] = useState<string>(DateTime.now().plus({ day: 1 }).toISODate());
	const [deadline_checked, setDeadLineChecked] = useState<boolean>(false);

	const task: TaskInterface = useMemo(() => {
		return {
			name: name_input!,
			description: description_input,
			status: 'em progresso',
			deadline: deadline_checked
				? DateTime.fromFormat(data_input, 'yyyy-MM-dd').toFormat('dd/MM/yyyy')
				: null,
		};
	}, [name_input, description_input, data_input, deadline_checked]);

	const save_new_task = async () => {
		await insert_new_task_request(task);
	};

	return (
		<ModalComponent
			modalOpenState={modal_state}
			size={{ height: 'auto', width: '500px' }}
			Header={() => (
				<div style={{ padding: '20px' }}>
					<h4 className="no-margin">Inserir nova tarefa</h4>
				</div>
			)}
			Footer={() => (
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
					<div style={{ padding: '10px' }}>
						<button
							className="primary-button"
							disabled={name_input === undefined ? true : false}
							onClick={async () => {
								await save_new_task();
								setModalState(false);
								complementaryFunction();
							}}>
							Inserir
						</button>
					</div>
					<div style={{ padding: '10px' }}>
						<button
							className="danger-button"
							onClick={() => {
								setModalState(false);
							}}>
							Cancelar
						</button>
					</div>
				</div>
			)}
			components_sizes={{ Header: 'auto', Footer: 'auto', Body: 'auto' }}>
			<div>
				<InputComponent initial_value={name_input} setValueState={setNameInput} input_name="Nome" />
				<TextAreaComponent
					initial_value={description_input}
					setValueState={setDescriptionInput}
					input_name="Descrição"></TextAreaComponent>
				<div style={{ display: 'flex', flexDirection: 'row' }} className="center">
					<SwitchComponent
						style={{ display: 'flex', flexDirection: 'row', height: '100%', flex: 1, padding: 10 }}
						className="center"
						checked={deadline_checked}
						setCheckedState={setDeadLineChecked}
						input_name="Possui prazo"
					/>
					<div style={{ display: !deadline_checked ? 'none' : 'flex' }}>
						<InputComponent
							input_type="date"
							initial_value={data_input}
							setValueState={setDataInput}
							input_name="Prazo"
							disabled={!deadline_checked}
						/>
					</div>
				</div>
			</div>
		</ModalComponent>
	);
};

export default CreateNewTaskModal;
