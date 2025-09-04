const Footer = () => {
	return (
		<div style={{ height: 'auto', display: 'flex', flexDirection: 'column' }} className="footer">
			<div>
				<p className="no-margin">Desenvolvido por: Iago de Aquino Oliveira</p>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<h6 className="no-margin">Contatos</h6>
				<div style={{ display: 'flex', flexDirection: 'column' }} className="center">
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<p className="no-margin">Email: iagodeaquino10@gmail.com</p>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<p className="no-margin">Github: https://github.com/iagoaquino/</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
