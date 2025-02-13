import { useState, useEffect } from 'react'
import axios from 'axios';
import BookCard from './components/BookCard';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    axios('http://localhost:3500/books/')
    .then (res => {
      setBookList(res.data)
    })
  }, []);


  return (
    <div>
        <h1 className="text-2xl py-3 textPrimary">List of Books</h1>
        <div className="flex  justify-end">
          <button className="bg-primary text-white p-2 rounded-md">
            <Link to="/books/add">
              Add Book
            </Link>
            </button>
          </div>
         <div className='flex flex-wrap justify-center'>
          {bookList.map((book) => (
            <div key={book.id} className="py-2 w-1/2">
              <BookCard {...book} />
            </div>
          ))}
         </div>
         
          
        
    </div>
  )
}

export default BookList