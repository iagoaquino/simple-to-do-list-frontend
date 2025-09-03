import type { HtmlHTMLAttributes } from 'react';
import './index.css';

type InputAttributes = React.InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
	setValueState: Function;
	input_name: string;
	ref_object?: React.RefObject<HTMLInputElement>;
	on_key_down_function?: Function;
	initial_value: any;
	max_limit?: number;
	input_type?: string;
	props?: InputAttributes;
} & InputAttributes;

const InputComponent: React.FC<InputProps> = ({
	setValueState,
	input_name,
	ref_object,
	on_key_down_function,
	initial_value,
	max_limit = 100,
	input_type = 'text',
	...props
}) => {
	return (
		<>
			<div className="input-conteiner ">
				<label className="label-text text-start" htmlFor={`inputOf${input_name}`}>
					{input_name}
				</label>
				<input
					{...props}
					type={input_type}
					value={initial_value}
					ref={ref_object}
					className="input"
					maxLength={max_limit}
					id={`inputOf${input_name}`}
					onChange={(e) => {
						setValueState(e.target.value);
					}}
					onKeyDown={(event) => {
						if (on_key_down_function) {
							on_key_down_function(event);
						}
					}}
				/>
			</div>
		</>
	);
};

export default InputComponent;
