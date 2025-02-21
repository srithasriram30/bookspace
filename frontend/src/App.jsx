import './App.css'
import { Routes, Route } from 'react-router-dom'
import EditBook from './modules/books/EditBook'
import BookList from './modules/books/BookList'
import BookDetails from './modules/books/BookDetails'
import HomePage from './modules/home/HomePage'
import AddBook from './modules/books/AddBook'
import Register from './modules/auth/Register'
import Login from './modules/auth/Login'
import UserDashbaord from './modules/dashboard/UserDashboard'
function App() {

  return (

 
      // <Routes>
      //   <Route index element={<HomePage />}/>
      //   <Route path ='/books' element={<BookList />}/>
      //   <Route path ='/books/:id' element={<BookDetails />}/>
      //   <Route path ='/books/:id/edit' element={<EditBook />}/>
      //   <Route path ='/books/add' element={<AddBook />}/>
      // </Routes>

      <Routes>
      <Route index element={<HomePage />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path="/dashboard" element={<UserDashbaord />} />
      <Route path='/books'>
        <Route index element={<BookList />} />
        <Route path='add' element={<AddBook />} />
        <Route path=':id' element={<BookDetails />} />
        <Route path=':id/edit' element={<EditBook />} />
      </Route>
     
    </Routes>
  )
}

export default App
