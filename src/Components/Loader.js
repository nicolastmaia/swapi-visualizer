import React from 'react';
import { Spin } from 'antd';
const Loader = () => {
	return (
		<div style={styles.loader}>
			<Spin size='large' />;
		</div>
	);
};

export default Loader;

const styles = {
	loader: { display: 'flex', justifyContent: 'center', margin: '1rem'},
};
