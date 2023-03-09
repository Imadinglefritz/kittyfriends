import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			kitties: [],
			searchfield: ''
		}
	}


	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ kitties: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { kitties, searchfield } = this.state;
		const filteredKitties = kitties.filter(kitty =>{
			return kitty.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		// using a ternary operator (?:)
			// if kitties.length = 0, 0 evaluates to false
			// therefore, !kitties.length = true
			// ternary syntax:  variable = Expression1 ? Expression2 : Expression3
			// if expression1 is true, Expression2, otherwise Expression3
		return !kitties.length ?
		<h1>Loading...</h1> :
		(
			<div className='tc'> {/*text-align center*/}
				<h1 className='f1'>KittyFriends</h1> {/*font-size*/}
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList kitties={filteredKitties} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}


export default App; 