import { useState } from 'react';
import Modal from './components/Modal';

const GIPHY_API = 'https://api.giphy.com/v1/gifs/search?api_key=tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ&limit=20&offset=0&q='

function App() {
	const [search, setSearch] = useState('');
	const [gifs, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const [selectedGif, setSelectedGif] = useState({});

	const gifSearch = () => {
		if (search.length > 0) {
			setIsLoading(true)
			fetch(GIPHY_API + search)
				.then((res) => {
					setIsLoading(false)
					return res.json()
				})
				.then((result) => {
					console.log("result", result.data)
					setGifs(result.data)
				})
				.catch((err) => { console.error(err) })
		}
	}

	const handleSelectedGif = (index) => {
		setOpenModal(true)

		if (gifs.includes(index)) {
			setSelectedGif(gifs.filter((i) => i !== index))
		} else {
			setSelectedGif([...gifs, index])
		}

		setSelectedGif(index)
	}

	return (
		<div className="text-center">
			<header className="bg-cyan-800/50 p-14 text-center">
				<input type="search" value={search} onChange={(e) => setSearch(e.target.value)} className="m-2 p-3 rounded-md" />
				<button onClick={gifSearch}>Search</button>
			</header>

			<div className="mx-auto w-[80%] flex flex-wrap jusify-center items-center">
				{isLoading && <div>Loading...</div>}

				{gifs?.map((gif, index) => {
					return (
						<img src={gif.images.fixed_height_still.url} alt="" key={index} className="m-2 rounded-md" onClick={() => handleSelectedGif(gif)} />
					)
				})}

				{
					openModal ? (
						<Modal setOpenModal={setOpenModal} selectedGif={selectedGif?.images?.downsized_large.url} />
					) : null
				}

			</div>
		</div>
	);
}
export default App;
