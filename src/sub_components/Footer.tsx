const Footer = () => {
	return (
		<div style={{ height: 'auto' }} className="footer">
			<div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
				<div>Desenvolvido por</div>
				<div>
					<h6 className="no-margin">Iago de Aquino Oliveira</h6>
				</div>
			</div>
			<div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
				<h6 className="no-margin">Contatos</h6>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<p className="no-margin">Email </p>
						<p className="no-margin">iagodeaquino10@gmail.com</p>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<p className="no-margin"> Github</p>
						<p className="no-margin">https://github.com/iagoaquino/</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
