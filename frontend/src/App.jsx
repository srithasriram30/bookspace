import './App.css'
import { Routes, Route } from 'react-router-dom'
import EditBook from './modules/books/EditBook'
import BookList from './modules/books/BookList'
import BookDetails from './modules/books/BookDetails'
import HomePage from './modules/home/HomePage'
import AddBook from './modules/books/AddBook'

function App() {

  return (


      <Routes>
        <Route index element={<HomePage />}/>
        <Route path ='/books' element={<BookList />}/>
        <Route path ='/books/:id' element={<BookDetails />}/>
        <Route path ='/books/:id/edit' element={<EditBook />}/>
        <Route path ='/books/add' element={<AddBook />}/>
      </Routes>

  )
}

export default App
