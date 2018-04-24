import React from 'react';

export default function AiResponse(props) {
	const responseStyle = {
    	fontSize: "30px",
    }
    const {response} = props;
	return (
		<p id="responseID" style={responseStyle}>{response}</p>
	)
}

AiResponse.defaultProps = {
	response: "Guess a Number"
}






// import React from 'react';

// import Feedback from './feedback';
// import GuessForm from './guess-form';

// export default function GuessSection(props) {
//   const { feedback, guessCount } = props;
//   return (
//     <section aria-label="Guess section" aria-describedby="feedback">
//       <Feedback feedback={feedback} guessCount={guessCount} />
//       <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
//     </section>
//   );
// }
