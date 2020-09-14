import React from 'react';

function SearchBox( {searchfield, onSearchChange} ) {
	return (
		<div className='pa2'>
			<input className='pa3 ba b--green bg-lightest-blue' 
			  type='search' placeholder='Search Robots' 
				// onChange is an event in HTML
			  onChange={onSearchChange}
			/>
		</div>
	)
}

export default SearchBox 
