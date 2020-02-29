import React, { Component } from 'react';
import CardList from './components/card-list/card-list-component';
import SerachBox from './components/search-box/search-box.component';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state = {
       monsters: [],
       searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    const that = this;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
      response.json()
      .then(function(users){
          that.setState({monsters : users});
      });
    });
  }

  handleChange(e){
    this.setState({searchField : e.target.value});
  }  


  render(){
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(function(monster){
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (      
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SerachBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />  
        <CardList monsters={filteredMonsters} />
      </div>
    );    
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
