import React from 'react'

function Header({ search, setSearch, handleClick, gifSearch }) {
	return (
		<header className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-14 py-4 text-center flex items-center justify-between">
			<img src={'https://developers.giphy.com/branch/master/static/header-logo-0fec0225d189bc0eae27dac3e3770582.gif'} alt="giphy logo" className="rounded-lg" width="400"/>
			<form>
				<input
					type="search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyPress={handleClick}
					className="m-2 p-3 rounded-md"
				/>
				<button type="submit" onClick={gifSearch} className="text-white font-bold rounded border-2 p-2">Search</button>
			</form>
		</header>
	)
}

export default Header