import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-around items-center py-7 shadow-md">
                <div >
                    <h2 className="text-2xl font-extrabold" >Phone Shop</h2>
                </div>
                <ul className="flex gap-5 text-xl font-bold">
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                        </li>
                        <li>
                     <NavLink to="/favourites">Favourites</NavLink>
                     </li>
                     <li>
                     <NavLink to="/login">Login</NavLink>
                     </li>
                 
                </ul>
            </nav>

        </div>
    );
};

export default Navbar;