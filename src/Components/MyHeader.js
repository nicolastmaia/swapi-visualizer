import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const { Header } = Layout;

const MyHeader = () => {
	return (
		<Link to={`/`}>
			<Header
				style={{
					backgroundColor: 'black',
					height: '30%',
					textAlign:'center'
				}}
			>
				<text
					style={{
						fontWeight: 700,
						fontSize: '4rem',
						color: '#ffe81f',
					}}
				>
					Star Wars Index
				</text>
			</Header>
		</Link>
	);
};

export default MyHeader;
