import { useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api'
import Modal from './components/Modal';
import { useAsync } from 'react-async-hook';
import Header from './components/Header';
import GifComponent from './components/GifComponent';
import Footer from './components/Footer';


const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY)

function App() {

	// States
	const [search, setSearch] = useState('');
	const [gifs, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [gifModal, setGifModal] = useState(null);
	const [selectedGif, setSelectedGif] = useState({});



	useAsync(async (offset) => {
		const { data } = await giphyFetch.trending({ offset, sort: 'relevant' })
		setGifs(data)
	}, [])

	const gifSearch = async (event, offset) => {
		event.preventDefault();
		if (search.length > 0) {
			setIsLoading(true)
			const { data } = await giphyFetch.search(search, { offset, sort: 'relevant', limit: 30 })
			setGifs(data)
			setIsLoading(false)
			setSearch('')
		}
	}

	const handleClick = (key) => {
		const enterKey = key.keyCode === 13;
		if (enterKey) {
			gifSearch()
		}
	}

	const handleSelectedGif = (index) => {
		setGifModal(true)
		if (gifs.includes(index)) {
			setSelectedGif(gifs.filter((i) => i !== index))
		} else {
			setSelectedGif([...gifs, index])
		}
		setSelectedGif(index)
	}

	const handleCloseModal = () => {
		setGifModal(null)
	}

	return (
		<div className="text-center bg-slate-900 relative">
			<Header
				search={search}
				setSearch={setSearch}
				handleClick={handleClick}
				gifSearch={gifSearch}
			/>

			<div className="mx-auto my-12 w-[80%]">
				{isLoading && <div><h1 className="text-white font-light">Loading...</h1></div>}
				<div>
				{
					gifs?.map((gif, index) => <GifComponent key={index} gif={gif} handleSelectedGif={handleSelectedGif} />)
				}
				</div>

				{
					gifModal ? (
						<Modal
							handleCloseModal={handleCloseModal}
							selectedGif={selectedGif?.images?.downsized_large.url}
						/>
					) : null
				}
			</div>
			<Footer />
		</div>
	);
}
export default App;
