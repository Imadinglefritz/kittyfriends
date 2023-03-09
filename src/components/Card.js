import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		{/*text-align center, background light green, display inline-block, border-radius #3, padding medium, spacing small, transformation, border-width #2, box-shoadow #5
		from https://tachyons.io/docs/table-of-properties/ */}
		<img alt='kitties' src={`https://robohash.org/set_set4/bgset_bg1/${id}?size=180x180`} />
			{/*set4 is kitties instead of robots */}
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;