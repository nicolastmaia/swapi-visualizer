import React from 'react';
import { Spin } from 'antd';
const Loader = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<Spin size='large' />;
		</div>
	);
};

export default Loader;
