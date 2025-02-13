import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const BookDetails = () => {

  const {id} = useParams();
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3500/books/${id}`)
    .then (res => {
      setBook(res.data)
    })
  }, []);

  const deleteBook = () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      axios.delete(`http://localhost:3500/books/${id}`)
      .then((res) => {
        if(res.status === 200) {
        alert('Book deleted successfully')
        window.location.replace('/books')
      } else {
        alert('Failed to delete book')
        console.log(res)
      }
    }).catch(err => {
      alert('Failed to delete book')
      console.log(err)
    })
}
  }
  return (
    <>
    <div className='flex flex-col'>
      <button>
        <Link to={`/books/${id}/edit`}>Edit book</Link>
        </button>
      <button onClick={deleteBook}>
       Delete book
      </button>
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <p>{book.description}</p>
    </div>
    <div className='py-3'>
      <h1>Reviews</h1>
    </div>
    </>
  )
}

export default BookDetails