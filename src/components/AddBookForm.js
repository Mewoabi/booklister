import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const AddBookForm = () => {
    const [title, setTitle ]= useState("")
    const [author, setAuthor] = useState("");
    const {addBook} = useContext(BookContext);
    const handleSubmit = (e) => {
            e.preventDefault();
            addBook(title,author);
    }
    return ( 
        <form onSubmit={handleSubmit} className="book-form">
            <input type="text" placeholder="Title" required value={title} onChange={(e) =>setTitle(e.target.value) }/>
            <input type="text" placeholder="Author" required value={author} onChange={(e) =>setAuthor(e.target.value) }/>
            <button type="submit">Add book</button>
        </form>
     );
}
 
export default AddBookForm;