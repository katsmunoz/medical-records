import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import axios from 'axios';

const api = axios.create({
  baseURL: `https://jsonmock.hackerrank.com/api/medical_records`
})

class App extends Component {

  state = {
    records: []
  }

  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data.data)
      this.setState({ records:res.data.data })
    })
  }

render () {
  return (
    <div className="App">
       <Home />
    </div>
  );
}
  
}

export default App;
