import React from 'react'

function Footer() {
	return (
		<div className="flex flex-col items-center justify-center p-14 border-t border-white">
			<p className="text-white">Made with:</p>
			<p className="text-white">
				React <a href="https://www.npmjs.com/package/react-async-hook" className="underline decoration-1 underline-offset-4">useAsync</a>
			</p>
			<p className="text-white">
				<a href="https://tailwindcss.com/" className="underline decoration-1 underline-offset-4">Tailwind CSS</a>
			</p>
			<p className="text-white">
				<a href="https://www.npmjs.com/package/@giphy/js-fetch-api#pagination-options" className="underline decoration-1 underline-offset-4">Giphy API</a>
			</p>
		</div>
	)
}

export default Footer