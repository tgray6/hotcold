import React from 'react';

export default function AiResponse(props) {
	const responseStyle = {
    	fontSize: "30px",
    }
	return (
		<p id="responseID" style={responseStyle}>{props.response}</p>
	)
}

AiResponse.defaultProps = {
	response: "I'm Waiting..."
}