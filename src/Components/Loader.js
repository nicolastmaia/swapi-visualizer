import { Spin } from 'antd';
import React from 'react';

// loader padrão da biblioteca antd customizado para aparecer sempre no meio da tela
const Loader = () => {
	return (
		<div style={styles.loader}>
			<Spin size='large' />;
		</div>
	);
};

export default Loader;

const styles = {
	loader: { display: 'flex', justifyContent: 'center', margin: '1rem' },
};
