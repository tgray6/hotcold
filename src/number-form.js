import React from 'react';   
import FormButton from './form-button';

export default class NumberForm extends React.Component{
//remember all these consts need to be inside the render() method or you get errors. Same with if statements, but they go before the return statement.
    render(){
   		const formStyle = {
      		width: "250px",
      		background: "#222",
      		color: "white",
     		height: "25px"
    	}

    	const numbers = []


    	function storeNumbers(event){
    		event.preventDefault();
    		let currentValue = document.getElementById('numberInput').value;
    		numbers.push(currentValue);
    		console.log(numbers);
    	}
   	 	return(
    		<form onSubmit={storeNumbers}>
    			<input required type="number" id="numberInput" placeholder="Enter # between 1-100" min="1" max="100" style={formStyle}/>
    			<FormButton />
    		</form>	
   		 )
	}
}