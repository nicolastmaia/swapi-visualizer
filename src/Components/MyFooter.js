import { Layout } from 'antd';
import { React } from 'react';

const { Footer } = Layout;

const MyFooter = () => {
	return <Footer style={styles.footer}>Open Source</Footer>;
};

export default MyFooter;

const styles = {
	footer: {
		padding: 3,
		height: '2rem',
		backgroundColor: '#707070',
		color: '#ccc',
		textAlign: 'center',
		width: '100%',
		position: 'absolute',
		bottom: '0px',
	},
};
