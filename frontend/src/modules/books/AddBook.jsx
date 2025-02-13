import axios from "axios"
const AddBook = () => {

    function addBook(formData) {
            axios.post('http://localhost:3500/books/addBook', {
            title: formData.get('title'),
            author: formData.get('author'),
            isbn: formData.get('isbn'),
            description: formData.get('description'),
            publicationDate: formData.get('published'),
            genre: formData.get('genre').split(','),
    }).then(res => {
        console.log(res)
        if(res.status === 201)
        {
            alert('Book added successfully')
            window.location.replace('/books')
        }
        else
        {
            alert('Failed to add book')
            console.log(res.message)
        }
    }).catch(err => {
        alert('Failed to add book');
        console.log(err);
    });
       
   
    }
  return (
    <div>
        <form action={addBook}>
            <div>
                <label className="text-sm font-semibold text-gray-700" htmlFor='title'>Title</label>
                <input className="border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white" type='text' id='title' name='title' />
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700"  htmlFor='author'>Author</label>
                <input className="border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white" type='text' id='author' name='author' />
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700"  htmlFor='isbn'>ISBN</label>
                <input className="border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white" type='text' id='isbn' name='isbn' />
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700"  htmlFor='description'>Description</label>
                <textarea className="border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white" id='description' name='description' />
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700"  htmlFor='published'>Published</label>
                <input className="border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white" type='date' id='published' name='published' />
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700"  htmlFor='genre'>Genre</label>
                <input className="border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white" type='text' id='genre' name='genre' />
            </div>

            <button className='bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded' type='submit'>Add Book</button>
        </form>
    </div>
  )
}

export default AddBook