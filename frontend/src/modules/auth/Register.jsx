import axios from 'axios'
const Register = () => {

    const register = (formData) => {

        axios.post('http://localhost:3500/auth/register', {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
        }).then(res => {
            console.log(res)
            if(res.status === 201)
            {
                alert('User registered successfully')
                window.location.replace('/login')
            }
            else
            {
                alert('Failed to register user')
                console.log(res.message)
            }
        }).catch(err => {
            alert('Failed to register user');
            console.log(err);
        });
  
}

  return (
    <div>
        <h1>Register</h1>
       <form action={register}>
            <div>
                <label className='text-sm font-semibold text-gray-700' htmlFor="name">Username</label>
                <input className='border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white' type="text" id="username" name="username" />
            </div>
            <div>
                <label className='text-sm font-semibold text-gray-700' htmlFor="email">Email</label>
                <input className='border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white' type="email" id="email" name="email" />
            </div>
            <div>
                <label className='text-sm font-semibold text-gray-700' htmlFor="password">Password</label>
                <input className='border border-gray-300 rounded px-3 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white' type="password" id="password" name="password" />
            </div>

            <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded" type="submit">Register</button>
       </form>
    </div>
  )
}

export default Register