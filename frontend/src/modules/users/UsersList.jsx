import {useState, useEffect} from 'react'
import axios from 'axios'

const UsersList = () => {

  const [usersList, setUsersList] = useState([]);
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  useEffect(() => {
    axios('http://localhost:3500/users/')
    .then (res => {
      setUsersList(res.data.users)
    });

  }, []);
  return (
    <div>
      <h1>Users List</h1>

      {
        usersList.map((user, index) => (
          <div key={index}>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}

export default UsersList