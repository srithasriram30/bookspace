import axios from 'axios'

const Login = () => {

  const login = (formData) => {
    axios.post('http://localhost:3500/auth/login', {
      email: formData.get('email'),
      password: formData.get('password'),
    }).then(res => {
      console.log(res)
      if(res.status === 200)
      {
        alert('User logged in successfully')
        window.location.replace('/dashboard')
      }
      else
      {
        alert('Failed to login user')
        console.log(res.message)
      }
    }).catch(err => {
      alert('Failed to login user');
      console.log(err);
    });
  }
  return (
    <div>
      <h1>Login</h1>
      <form action={login}>
            <div>
                <label className='text-sm font-semibold text-gray-700' htmlFor="email">Email</label>
                <input className='border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white' type="email" id="email" name="email" />
            </div>
            <div>
                <label className='text-sm font-semibold text-gray-700' htmlFor="password">Password</label>
                <input className='border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white' type="password" id="password" name="password" />
            </div>

            <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded" type="submit">Login</button>
       </form>
    </div>
  )
}

export default Login