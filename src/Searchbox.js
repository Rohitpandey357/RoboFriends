import React from 'react'

const Searchbox =({ searchChange }) => {
	return (
			<input type='search' placeholder='Find robot' className='pa3 ba b--green bg-lightest-blue' 
				onChange= {searchChange}	
			/>
		)
}
export default Searchbox