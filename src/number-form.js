import React from 'react';   
import FormButton from './form-button';

export default class NumberForm extends React.Component{
//remember all these consts need to be inside the render() method or you get errors. Same with if statements, but they go before the return statement.
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onMakeGuess){
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = "";
    // this.input.focus();
  }

    render(){
      const formStyle = {
        width: "250px",
        background: "#222",
        color: "white",
        height: "25px"
    }
   	  return(

    	 <form onSubmit = {event => this.onSubmit(event)}>
    		  <input type="number" ref={input => (this.input = input)} id="numberInput" placeholder="Enter # between 1-100" min="1" max="100" style={formStyle}/>
    		  <FormButton />
    	 </form>	
   	)
   }
}




//     render(){
//    		const formStyle = {
//       		width: "250px",
//       		background: "#222",
//       		color: "white",
//      		height: "25px"
//     	}

//     	const numbers = []



//     	function handleFormSubmit(event){
//     		event.preventDefault();
//     		let currentValue = document.getElementById('numberInput').value;
//     		numbers.push(currentValue);
//     		console.log(numbers);
//     	}
//    	 	return(
//     		<form onSubmit={handleFormSubmit}>
//     			<input required type="number" id="numberInput" placeholder="Enter # between 1-100" min="1" max="100" style={formStyle}/>
//     			<FormButton />
//     		</form>	
//    		 )
// 	}
// }