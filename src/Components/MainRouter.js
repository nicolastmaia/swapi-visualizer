import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Film from '../Pages/Film';
import Home from '../Pages/Home';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';
import { Layout } from 'antd';

const { Content } = Layout;

const MainRouter = () => {
	return (
		<Router>
			<Layout>
				<MyHeader />
				<Content style={{ padding: 24, backgroundColor: '#20164d' }}>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/films/:id'>
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
