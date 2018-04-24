import React from 'react';
// import NumberForm from './number-form';
import AiResponse from './game-response';
import GenerateNumber from './generate-number';
import FormButton from './form-button';
import './App.css';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      number: GenerateNumber(),
      guessedNumbers: [],
      recentGuessedNum: null,
      response: "Guess A Number"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.testValues = this.testValues.bind(this);

  }

  newGame(){
    this.setState({
      number: GenerateNumber(),
      guessedNumbers: [],
      recentGuessedNum: null,
      response: "Guess A Number"
    })
  }

  handleSubmit(event){
    event.preventDefault();
    //treated the state as if it were immutable using the spread operator
    this.setState({
      recentGuessedNum: this.numberInput.value,
      guessedNumbers: [...this.state.guessedNumbers, this.numberInput.value],
      response: this.state.number === this.numberInput.value? 'correct' : 'try again'
    })
    this.numberInput.value = "";
    console.log(this.state)
  }

  // testValues(){
  //   if (this.state.number === this.state.recentGuessedNum){
  //     console.log("Hell Yeah They Are Equal");
  //   }
  //   else{
  //     console.log("Shit must not be equal");
  //   }
  // }


  render() {
    // this.testValues()
    const formStyle = {
      width: "250px",
      background: "#222",
      color: "white",
      height: "25px"
    }
    //object destructuring to assign variables for our state
    const {guessedNumbers, response} = this.state;
    
    console.log("Number to guess is: " + this.state.number);
    console.log("Guessed numbers are: " + this.state.guessedNumbers);
    console.log("Most recent guessed was: " + this.state.recentGuessedNum);
    console.log (this.state.response);
    return (
      <div>
        <div className="App">
         <header className="App-header">
           <h1 className="App-title">HOT OR COLD CHALLENGE</h1>
          </header>

          <form onSubmit = {this.handleSubmit}> <input type="number" ref={input => (this.numberInput = input)} id="numberInput" placeholder="Enter # between 1-100" min="1" max="100" style={formStyle}/>
          <FormButton />
          </form>
          <AiResponse response={response} />
          <p> Numbers Guessed: {guessedNumbers + ""} </p>
          <div>
            <button onClick={() => this.newGame()}>New Game</button>
          </div>
       </div>
      </div>
    );
  }
}
