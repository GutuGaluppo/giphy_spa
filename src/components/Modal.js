import React from 'react'

const Modal = ({ setOpenModal, selectedGif }) => {
	return (
		<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
			<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				{/* <!--
				Background overlay, show/hide based on modal state.

				Entering: "ease-out duration-300"
				From: "opacity-0"
				To: "opacity-100"
				Leaving: "ease-in duration-200"
				From: "opacity-100"
				To: "opacity-0"
				--> */}
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

				{/* <!-- This element is to trick the browser into centering the modal contents. --> */}
				<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

				{/* <!-- 
				Modal panel, show/hide based on modal state.

				Entering: "ease-out duration-300"
				From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				To: "opacity-100 translate-y-0 sm:scale-100"
				Leaving: "ease-in duration-200"
				From: "opacity-100 translate-y-0 sm:scale-100"
				To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				-->
				*/}
				<div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

					<div class="m-3">
						<img src={selectedGif} alt="" className="mx-auto" />
					</div>

					<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							type="button"
							onClick={() => setOpenModal(false)}
							class="
							mt-3 
							w-10
							h-10 
							flex 
							justify-center
							items-center
							rounded-full 
							border
							border-gray-300
							shadow-sm
							bg-white
							text-base
							font-medium
							text-gray-700
							hover:bg-gray-50
							focus:outline-none
							focus:ring-2
							focus:ring-offset-2
							focus:ring-indigo-500
							"
						>
							X
						</button>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Modal