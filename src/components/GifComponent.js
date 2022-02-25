import React from 'react'

function GifComponent({ gif, handleSelectedGif }) {
	return <img
		src={gif.images.fixed_height_still.url}
		alt={gif.title}
		className="m-2 rounded-md border-2 inline cursor-pointer"
		onClick={() => handleSelectedGif(gif)}
	/>
}

export default GifComponent