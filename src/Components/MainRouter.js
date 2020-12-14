import { Layout } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Film from '../Pages/Film';
import Home from '../Pages/Home';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';

const { Content } = Layout;

const MainRouter = () => {
	return (
		<Router>
			<Layout>
				<MyHeader />
				<Content style={styles.content}>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
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
