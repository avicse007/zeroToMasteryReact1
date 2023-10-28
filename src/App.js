import './App.css';
import { Component, useEffect, useState } from 'react';
import React from 'react';
import  CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box-component';

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters : [
//         { id:123, name: 'Avinash'},
//         { id:1233, name: 'Avinash-Suraj'},
//         { id:1234, name: 'Avinash-Avisha'},
//         { id:12344, name: 'Avinash-Susmita'}
//     ],
//     searchField : '',
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState({monsters : users}))
//   }

//   onSearchChange = (event) => {
//     event.preventDefault();
//     const searchField = event.target.value.toLowerCase();
//     this.setState(()=>{
//       return {searchField}
//     });
//   }



//   render(){
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((item) => {
//       return item.name.toLowerCase().includes(searchField)
//     });  
//     return (
//       <div className="App">
//         <SearchBox 
//         placeholder='Search Monsters' 
//         onSearchChangeHandler={onSearchChange}
//         className='search-box'/>
//         <CardList monsters={filteredMonsters}/>
//       </div>

//     );
//   }
  
// }


const App = () => { 
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([{ id:123, name: 'Avinash'},
            { id:1233, name: 'Avinash-Suraj'},
            { id:1234, name: 'Avinash-Avisha'},
            { id:12344, name: 'Avinash-Susmita'}]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
  },[])          

  const filteredMonsters = monsters.filter((item) => {
    return item.name.toLowerCase().includes(searchField)
  });          
  const onSearchChange = (event) => {
        event.preventDefault();
        const eventSearchField = event.target.value.toLowerCase();
          setSearchField(eventSearchField);
      }


  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
      placeholder='Search Monsters' 
      className='search-box'
      onSearchChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters}/>
    </div>

  );
}

export default App;
