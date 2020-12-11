import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Film from '../Pages/Film';
import Home from '../Pages/Home';
import Footer from './Footer';

const MainRouter = () => {
	return (
		<div style={{ flex: 1, justifyContent: 'center' }}>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/films/:id'>
						<Film />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default MainRouter;
