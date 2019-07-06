import React, { Component } from 'react';

import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'


class App extends Component {

  state = { // saves the personal data of component (dynamic change)
    name: 'sky',
    smh: 'smh',
    users: [
      {id: 1,
      name:'sky',
      age:20},
      {id: 2,
        name:'skywalker',
        age:20},
      {id: 3,
        name:'skye',
        age:20}
    ],

    Books: [
      {key:1,name: 'you dont know JS',author: 'kile simpson'},
      {key:2,name: 'JAVA by herbert schildt', author: 'herbert schildt'}
    ],
    
    
    


  }

  handleChange = (e)=>{
    if(e.target.value.trim() === ''){
      this.setState({
        name: 'username'
      })
    }
    else {
      this.setState({
        name: e.target.value
      })
    }
  }

  handleButton = (e) =>{
    console.log('hello')
  }

  render() {
    return (
      <div>
        <h1>hello {this.props.name}</h1>
        <h1>hii {this.state.name}</h1>
      
        <Navbar name={this.state.name} />
        <Hero smh={this.state.smh}/>
        <ul>
          {this.state.users.map(val => <li key={val.id}>hii {val.name} your age is {val.age}</li>)}
        </ul>


        <ul>
          {this.state.Books.map( value => {
            return <li key={value.key}> book name {value.name} published by {value.author}</li>
          })}
        </ul>
          
          <h1>{this.state.name}</h1>
          <input type="text" onChange={this.handleChange} placeholder="enter yer name"></input>
          <button onClick={this.handleButton}>Change Name</button>
          
      </div>


    );
  }
}

export default App;
