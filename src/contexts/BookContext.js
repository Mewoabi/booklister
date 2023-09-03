import React from 'react'
import { useState,createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title:"the way of kings",author:"patrick ruthfous",id:1},
        {title:"the book of the death",author:"Brandon sanderson",id:2},
        {title:"harbingers of doom",author:"Doray",id:3},
        {title:"back to the offset",author:"Doremi",id:4}
    ])
    const addBook = ( title, author) => {
        setBooks([...books,{title,author,id:uuidv4()}])
    }
    const removeBook = (id) => {
        setBooks(books.filter((book)=>book.id !== id))
    }
    return ( 
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;