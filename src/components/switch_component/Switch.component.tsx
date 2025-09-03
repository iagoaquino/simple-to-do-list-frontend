import './index.css';

type SwitchComponentProps = {
	checked: boolean;
	setCheckedState: (value: boolean) => void;
	input_name: string;
	props?: React.HTMLAttributes<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;

const SwitchComponent: React.FC<SwitchComponentProps> = ({
	checked,
	setCheckedState,
	input_name,
	...props
}) => {
	const handleCheckedChange = () => {
		setCheckedState(checked ? false : true);
	};

	return (
		<div {...props}>
			<div style={{ padding: 10 }}>
				<p className="no-margin label-text">{input_name}</p>
			</div>
			<div className="switch" onClick={handleCheckedChange}>
				<input type="checkbox" className="input" checked={checked}></input>
				<span className="slider"></span>
			</div>
		</div>
	);
};

export default SwitchComponent;
