import { Layout } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Film from '../Pages/Film';
import Home from '../Pages/Home';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';

const { Content } = Layout;

// component que permite a troca de páginas ao clicarmos nos componentes que possuem <Link> como wrapper
const MainRouter = () => {
	return (
		<Router>
			<Layout>
				<MyHeader />
				<Content style={styles.content}>
					<Switch>
						{/* rota que nos leva ã página inicial */}
						<Route exact path='/'>
							<Home />
						</Route>
						{/* rota que nos leva á página de cada filme depenendo do :resourceId colocado no componente <Link> */}
						<Route path='/films/:resourceId'>
							<Film />
						</Route>
					</Switch>
				</Content>
				<MyFooter />
			</Layout>
		</Router>
	);
};

export default MainRouter;

const styles = {
	content: { padding: 24, backgroundColor: '#20164d' },
};
