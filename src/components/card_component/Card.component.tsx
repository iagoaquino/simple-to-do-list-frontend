import './index.css';

type MyComponentProps = React.HTMLAttributes<HTMLDivElement>;

type CardComponentProps = {
	Header?: React.ComponentType;
	children: React.ReactNode;
	Footer?: React.ComponentType;
	components_sizes?: {
		Header?: number | string;
		Body?: number | string;
		Footer?: number | string;
	};
	size: { width: number | string; height: number | string };
	props?: MyComponentProps;
} & MyComponentProps;

const CardComponent: React.FC<CardComponentProps> = ({
	children,
	Header,
	Footer,
	size,
	components_sizes = { Header: '25%', Body: 'auto', Footer: '25%' },
	...props
}) => {
	return (
		<div
			{...props}
			className={`card-div ${props.className ?? ''}`}
			style={{
				width: size.width,
				height: size.height,
				...props.style,
				gridTemplateRows: `${components_sizes.Header} ${components_sizes.Body} ${components_sizes.Footer}`,
			}}>
			<div className="tittle-card">{(Header && <Header />) || <></>}</div>
			<div className="body-card">{children}</div>
			<div className="footer-card">{(Footer && <Footer />) || <></>}</div>
		</div>
	);
};

export default CardComponent;
