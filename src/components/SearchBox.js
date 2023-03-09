import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				// padding #3,  solid border,  border color green, 
				// background color lightest blue 
				type = 'search' 
				placeholder='search kitty cards' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;