import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
 const {removeBook} = useContext(BookContext)
    return ( 
        <li className='book-item' onClick={()=>{removeBook(book.id)}}>
            <div className='title-div'>{ book.title }</div>
            <div className='author-div'>{ book.author }</div>
        </li>
     );
}
 
export default BookDetails;