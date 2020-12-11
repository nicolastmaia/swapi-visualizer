import Header from './Components/Header';
import MainRouter from './Components/MainRouter';
import 'antd/dist/antd.css';

function App() {
	return (
		<div className='relative pb-3 min-h-screen border-b bg-star-wars-purple'>
			<Header />
			<MainRouter />
		</div>
	);
}

export default App;
