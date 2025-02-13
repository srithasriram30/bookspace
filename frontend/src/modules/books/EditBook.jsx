import '../../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const EditBook = () => {
  
  const {id} = useParams();

  const [book, setBook] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3500/books/${id}`)
    .then (res => {
      setBook(res.data)
    })
  }, []);

  console.log(book);

  function editBook(formData) {
    axios.put(`http://localhost:3500/books/${id}`, {
      title: formData.get('title'),
            author: formData.get('author'),
            isbn: formData.get('isbn'),
            description: formData.get('description'),
            publicationDate: formData.get('published'),
            genre: formData.get('genre').split(','),
  }).then(res => {
      console.log(res)
      if(res.status === 200)
      {
          alert('Book edited successfully')
          window.location.replace(`/books/${id}`)
      }
      else
      {
          alert('Failed to edit book')
          console.log(res.message)
      }
  }).catch(err => { 
      alert('Failed to edit book');
      console.log(err);
  });
  }
  return (
    <div>
      <h1>Edit Book Form </h1>
      <form action={editBook}>
        <div>
          <label className='text-sm font-semibold text-gray-700' htmlFor="title">Title</label>
          <input className='border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-[#F3F4F6]' type="text" id="title" name="title" value={book.title} />
        </div>
        <div>
          <label className='text-sm font-semibold text-gray-700' htmlFor="author">Author</label>
          <input className='border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-[#F3F4F6]' type="text" id="author" name="author" value={book.author} />
        </div>
        <div>
          <label className='text-sm font-semibold text-gray-700' htmlFor="description">Description</label>
          <textarea className='border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-[#F3F4F6]' id="description" name="description" value={book.description}></textarea>
        </div>
        <div>
          <label className='text-sm font-semibold text-gray-700' htmlFor="published_date">Published Date</label>
          <input className='border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-[#F3F4F6]' type="date" id="published_date" name="published_date" value={book.publishDate} />
        </div>
        <div>
          <label className='text-sm font-semibold text-gray-700' htmlFor="genre">Genre</label>
          <input className='border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-[#F3F4F6]' type="text" id="genre" name="genre" value={book.genre} />
        </div>

        <button className='bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditBook