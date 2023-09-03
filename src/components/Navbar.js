import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
 
 

const Navbar = () => {
    const { books } = useContext(BookContext)
                     return (
                        <nav className='navbar'>
                            <h1>The BookList</h1>
                            <h4> You currently have { books.length } books to go through</h4>
                            {/* <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul> */}
                        </nav>
                    );
}
 
export default Navbar;

 