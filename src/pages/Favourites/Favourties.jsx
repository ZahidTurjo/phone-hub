import { useEffect, useState } from "react";
import PoneCard from "../Phone/PoneCard/PoneCard";
import usehooks from "../../hooks/hooks";


const Favourties = () => {
    const hooks=usehooks()
    console.log(hooks)
    const [favourites, setFavourites] = useState([])
    const [noFound, setNoFound] = useState('')
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const favouriteItems = JSON.parse(localStorage.getItem("favourites"));
        if (favouriteItems) {
            setFavourites(favouriteItems)
            const total = favouriteItems.reduce((prevalue,currentItem)=>prevalue+currentItem.price,0)
            setTotal(total)
        }
        else {
            setNoFound('no data found')

        }
    }, [])
    const handleLocalStorage = () => {
        localStorage.clear()
        setFavourites([])
        setNoFound('no data found')
    }
    const [isShow, setIsShow] = useState(false);


    return (
        <div className="py-7">
            {
                noFound ? <p className="text-4xl font-extrabold h-[80vh] 
             flex justify-center items-center">{noFound}</p>
                    :
                    <div>
                        {favourites.length > 0 &&
                            <button
                                onClick={handleLocalStorage}
                                className="bg-red-800 px-3 py-2 text-white rounded-xl">Delete all favourite</button>}
                            <p>Price:{total}</p>
                        <div className="grid grid-cols-2">
                            {
                                isShow ? favourites.map(phone => <PoneCard key={phone.id} phone={phone} ></PoneCard>)
                                    :
                                    favourites.slice(0, 2).map(phone => <PoneCard key={phone.id} phone={phone} ></PoneCard>)



                            }
                        </div>
                        <div>
                            {
                                favourites.length > 2 && <button onClick={() => setIsShow(!isShow)} className="block mx-auto bg-green-300 px-5 my-2">{isShow ? "see less" : "see more"}</button>

                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Favourties;