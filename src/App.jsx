import { Route, BrowserRouter as Router, Routes } from 'react-router'
import './App.css'
import Detail from './components/Detail'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route exact path='/' Component={Login}></Route>
					<Route path='/home' Component={Home}></Route>
					<Route path='/detail/:id' Component={Detail}></Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
