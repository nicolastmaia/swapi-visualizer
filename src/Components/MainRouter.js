import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Character from '../Views/Character';
import Film from '../Views/Film';
import Home from '../Views/Home';

const MainRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/films/:id'>
					<Film />
				</Route>
				<Route path='/character/:id'>
					<Character />
				</Route>
			</Switch>
		</Router>
	);
};

export default MainRouter;
