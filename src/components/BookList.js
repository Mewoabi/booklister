import React from 'react'
import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';
import AddBookForm from './AddBookForm';

const BookList = (props) => {

    const {books} = useContext(BookContext);

    return books.length ? ( 
       <div className='booklist'>
            <ul>
                {books.map(book => (
                    <BookDetails book={book} key={book.id}></BookDetails> 
                ))}
            </ul>
            <AddBookForm/>
       </div>
     ) : ( 
        <div className='empty'>
            <div >Hooray free time. No books to read</div>
             <AddBookForm/>
        </div>
     )
}
 
export default BookList;