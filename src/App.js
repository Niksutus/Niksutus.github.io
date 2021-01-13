import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import React, { Component } from 'react';
import MemoForm from './components/MemoForm/MemoForm'

class App extends Component {
  state = {
    showMemoForm: false,
  }

  clickHandler = () => {
    this.setState({showMemoForm:true})

  }

  render() {
    return (
      <div>
        <Header click={this.clickHandler}/>
        <Main />
        <Footer />
        {this.state.showMemoForm && <MemoForm />}
      </div>
    );
  }
}

export default App;

