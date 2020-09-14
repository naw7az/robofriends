import React from 'react';
import Card from './Card';

function CardList({ robots }) {
	// creating error to check error boundry
	// if (true) {
	// 	throw new Error('NOOOOOOOOOOOOOO');
	// }
	return (
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card
							key={i}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email} />
					);
				})
			}
		</div>
	)
}

export default CardList;

