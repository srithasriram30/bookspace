// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const BookCard = (book) => {
  const id = book._id;
  return (
     <div className='border p-2 m-2 bookCard flex justify-between gap-4'>
                    <div>
                      <img src='/bookImg.jpg' alt={book.title} className="w-24 h-24 rounded-full aspect-square object-cover" />
                    </div>
                    <div>
                    <h2 className="text-xl textPrimary">{book.title}</h2>
                    <p className="text-sm textPrimary">{book.author}</p>
                   
                    <Link to={{pathname: `/books/${id}`, query: {'id': id}}} className="text-sm textPrimary">View Details</Link>

                    {/* <p className="text-sm py-2 textPrimary">{book.description}</p>
                    {
                      
                      book.genre.map((genre) => (
                        <span key={genre} className="text-sm textPrimary genre rounded-full m-2 p-2">{genre}</span>
                    ))
                  }
    
                    </div>
                    <div className='flex gap-2 content-center'>
                      <FontAwesomeIcon className='editIcon' icon={faPencil} /> 
                      <FontAwesomeIcon className='deleteIcon' icon={faTrash} />  
                    */}
                    </div> 
                  </div>
  )
}

export default BookCard