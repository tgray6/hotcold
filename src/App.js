import React from 'react';
import NumberForm from './number-form';
import AiResponse from './game-response';
import './App.css';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }



  render() {
    return (
      <div>
        <div className="App">
         <header className="App-header">
           <h1 className="App-title">HOT OR COLD CHALLENGE</h1>
          </header>
          <NumberForm />
          <AiResponse />
       </div>
      </div>
    );
  }
}
