import type { HtmlHTMLAttributes } from 'react';
import './index.css';

type InputAttributes = React.InputHTMLAttributes<HTMLTextAreaElement>;

type TextAreaProps = {
	setValueState: Function;
	input_name: string;
	ref_object?: React.RefObject<HTMLInputElement>;
	onKeyDownFunction?: Function;
	initial_value: any;
	rows?: number;
	input_type?: string;
	props?: InputAttributes;
} & InputAttributes;

const TextAreaComponent: React.FC<TextAreaProps> = ({
	setValueState,
	input_name,
	ref_object,
	onKeyDownFunction,
	initial_value,
	input_type = 'text',
	rows = 10,
	...props
}) => {
	return (
		<>
			<div className="text-area-conteiner">
				<label className="label-text text-start" htmlFor={`inputOf${input_name}`}>
					{input_name}
				</label>
				<textarea
					{...props}
					value={initial_value}
					className="text-area"
					id={`inputOf${input_name}`}
					rows={rows}
					onChange={(e) => {
						setValueState(e.target.value);
					}}
					onKeyDown={(event) => {
						if (onKeyDownFunction) {
							onKeyDownFunction(event);
						}
					}}
				/>
			</div>
		</>
	);
};

export default TextAreaComponent;
