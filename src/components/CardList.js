import React from 'react';
import Card from './Card';

const CardList = ({ kitties }) => {
//  Used to verify ErrorBoundary works
//	if (true) {
//		throw new Error('NOOOOO!');
//	}
	return (
		<div>
	    	{kitties.map((user, i) => {
				return (
					<Card 
						key={i} 
						id={kitties[i].id} 
						name={kitties[i].name} 
						email={kitties[i].email}
						/>
				);
			})}
	    </div>
	);
}

export default CardList;