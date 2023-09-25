/* eslint-disable react/prop-types */





const PoneCard = ({ phone }) => {
    const {
        image, phone_name, id
    } = phone
    const handleAddToFavourite = () => {

        const addedFavouriteItems = [];
        const favouriteItems = JSON.parse(localStorage.getItem('favourites'))
        if (!favouriteItems) {
            addedFavouriteItems.push(phone)
            localStorage.setItem('favourites', JSON.stringify(addedFavouriteItems))
            alert('product added')
        }
        else {
            const isExits = favouriteItems.find(phone => phone.id === id)
            if (!isExits) {
                addedFavouriteItems.push(...favouriteItems, phone)
                localStorage.setItem('favourites', JSON.stringify(addedFavouriteItems))
                alert('product added')
            }
            else {
                alert("already exists")
            }



        }

    }

    return (
        <div className='flex py-7 justify-center items-center'>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}

                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className='flex justify-center items-center'>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            {phone_name}
                        </h6>


                        <a className="inline-block" href="#">
                            <button onClick={handleAddToFavourite}
                                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Add to favourite
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"

                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                >
                                    <path

                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoneCard;