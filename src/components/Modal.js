import React from 'react'

const Modal = ({ handleCloseModal, selectedGif }) => {
	const closeModal = (e) => {
		e.preventDefault()
		handleCloseModal()
	}
	return (
		<div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
				<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
				<div className="inline-block align-bottom relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<button
						type="button"
						onClick={closeModal}
						className="absolute top-2 right-8 mt-3 w-10 h-10 flex justify-center items-center rounded-full border border-gray-300 shadow-sm bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						X
					</button>
					<div className="m-3">
						<img src={selectedGif} alt="" className="mx-auto" />
					</div>
				</div>
			</div>
		</div>

	)
}

export default Modal