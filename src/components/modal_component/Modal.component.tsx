import { useEffect, useRef } from 'react';
import CardComponent from '../card_component/Card.component';
import './index.css';
interface ModalComponentProps {
	Header?: React.ComponentType | undefined;
	size?: { width: number | string; height: number | string };
	Footer?: React.ComponentType | undefined;
	components_sizes?: {
		Header?: number | string;
		Body?: number | string;
		Footer?: number | string;
	};
	modalOpenState: boolean;
	children: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
	modalOpenState,
	Header,
	Footer,
	size = { width: '500px', height: '500px' },
	components_sizes = { Header: '25%', Body: 'auto', Footer: '25%' },
	children,
}) => {
	const modal_ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (modalOpenState) {
			modal_ref.current?.classList.add('show');
			modal_ref.current?.classList.remove('hide');
		} else {
			modal_ref.current?.classList.add('hide');
			modal_ref.current?.classList.remove('show');
		}
	}, [modalOpenState]);

	return (
		<div ref={modal_ref} className="modal hide">
			<div className="modal-content" style={{ padding: '20px', width: 'auto' }}>
				<CardComponent
					components_sizes={components_sizes}
					Header={Header ? () => <Header /> : () => <></>}
					Footer={Footer ? () => <Footer /> : () => <></>}
					size={size}>
					{children}
				</CardComponent>
			</div>
		</div>
	);
};

export default ModalComponent;
