import { useState, useEffect } from 'react'
import axios from 'axios';
// import BookCard from './components/BookCard';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
const { Meta } = Card;

const BookList = () => {
  const tokenArray = window.localStorage.getItem('token').split('.');
  const payload = JSON.parse(atob(tokenArray[1]));
  const isAdmin = payload.user.role === 'admin' ? true : false;
  
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
         { isAdmin && <Button>
            <Link to="/books/add">
              Add Book
            </Link>
            </Button>}
          </div>
         <div className='flex flex-wrap justify-center'>
          {bookList.map((book) => (
            <div key={book.id} className="py-2 w-1/2">
              {/* <BookCard {...book} /> */}
              <Card className='m-5' cover={<img src='/bookImg.jpg'/>}>
                <Meta title={book.title} description={book.author} />
                <Link to={`/books/${book._id}`}>View Details</Link>
              </Card>

            </div>
          ))}
         </div>
         
          
        
    </div>
  )
}

export default BookList