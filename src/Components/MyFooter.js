import { React } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const MyFooter = () => {
	return (
		<Footer
			style={{
				padding: 3,
				height: '2rem',
				backgroundColor: '#707070',
				color: '#ccc',
				textAlign: 'center',
				width: '100%',
				position: 'absolute',
				bottom: '0px',
			}}
		>
			Open Source
		</Footer>
	);
};

export default MyFooter;
