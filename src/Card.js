import React from 'react';

// destructuring the argument(robots)
function Card({ name, email, id }) {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
			{/* 200x200 is in robohash for size */}
			<img src={`https://robohash.org/${id}?200x200`} alt='robots' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;


