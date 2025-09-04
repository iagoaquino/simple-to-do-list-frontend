import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardComponent from '../components/card_component/Card.component';

test('Testando Card Component', () => {
	render(
		<CardComponent
			size={{ height: '100px', width: '200px' }}
			components_sizes={{ Header: 'auto', Footer: 'auto', Body: 'auto' }}>
			<h1>Esse é meu card</h1>
		</CardComponent>
	);

	expect(screen.getByText('Esse é meu card')).toBeInTheDocument();
});

test('Testando botões do card', () => {
	const handleConfirm = jest.fn();
	const handleCancel = jest.fn();
	render(
		<CardComponent
			size={{ height: '100px', width: '200px' }}
			components_sizes={{ Header: 'auto', Footer: 'auto', Body: 'auto' }}
			Footer={() => (
				<div>
					<button onClick={handleConfirm}>Confirmar</button>
					<button onClick={handleCancel}>Cancelar</button>
				</div>
			)}>
			<h1>Esse é meu card</h1>
		</CardComponent>
	);

	fireEvent.click(screen.getByText('Confirmar'));
	fireEvent.click(screen.getByText('Cancelar'));

	expect(handleConfirm).toHaveBeenCalledTimes(1);
	expect(handleCancel).toHaveBeenCalledTimes(1);
});
