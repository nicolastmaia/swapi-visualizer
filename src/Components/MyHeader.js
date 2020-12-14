import { Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header } = Layout;

// cabeçalho que aparece em todas as páginas
const MyHeader = () => {
	return (
		// o component <Link> que faz o header redirecionar o site para a página inicial se clicado
		<Link to={`/`}>
			<Header style={styles.header}>
				<text style={styles.headerText}>Star Wars Index</text>
			</Header>
		</Link>
	);
};

export default MyHeader;

const styles = {
	header: {
		backgroundColor: 'black',
		height: '30%',
		textAlign: 'center',
	},
	headerText: {
		fontWeight: 700,
		fontSize: '4rem',
		color: '#ffe81f',
	},
};
