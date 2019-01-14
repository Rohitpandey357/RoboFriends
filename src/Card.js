import React from 'react'

const Card = (props) => {
	return (
		<div className="tc dib br3 pa3 bg-light-green ma2 grow bw2 shadow-5">
		<img alt='robo-friend' src={`https://robohash.org/${props.id}?200x200`} />
			<h1>{props.name}</h1>
			<p>{props.email}</p>
		</div>

		)
}

export default Card