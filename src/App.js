import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox ';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

// we made App as a class component(instead of functional component) only to use state.
class App extends Component {
	constructor() {
		super()
		// state are like variable for a component
		this.state = {
			robots: [],
			searchfield: ''
		}
		// to see the order of lifecycle method in react
		console.log('constructor')
	}

	// we are using componentDidMount to get API request.
	// now we don't need robots.js file anymore.
	componentDidMount() {
		// fetch(js) is like request(python)
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(resonse => resonse.json())
		.then(users => this.setState({robots: users}))

		// to see the order of lifecycle method in react
		console.log('componentDidMount')
	}

	// here onSearchChange method need to have the syntax of arrow function 
	// because this method is not a part of react(component), we created it.
	onSearchChange = (event) => {
		// changing the searchfield state, to change a state we need to use setState
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filterRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		// to see the order of lifecycle method in react
		console.log('render')
		return (
			<div className='tc'>
				<h1 className='f1'> Robo-Friends </h1>
				<SearchBox onSearchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filterRobots} />
					</ErrorBoundry>	
				</Scroll>
				
			</div>
		);
	}
}

export default App
