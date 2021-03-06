import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../ErrorBoundry';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }


	onSearchChange = (event)  => {
		this.setState({searchfield:event.target.value})
		
	
	}

	render(){
		const {robots,searchfield} = this.state;
		 
		 const filterdRobots = robots.filter(robort =>{
			return robort.name.toLowerCase().includes(searchfield.toLowerCase());
				})
		 if(robots.length ===0){
             return <h1>loading</h1>
         } else {

		return(
		<div className='tc'>
			 <h1 className= 'f2'>Robo Friends</h1>
			 <SearchBox searchChange={this.onSearchChange} />
			 <Scroll>
			    <ErrorBoundry>
			 	   < CardList robots={filterdRobots}/>
			 	</ErrorBoundry>   
			 </Scroll>
		 </div>
	);}

	}
	
}
export default App;