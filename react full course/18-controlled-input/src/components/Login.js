import {useState} from "react";

const Login = () => {
  const [data, setData] = useState({username: '', password: ''})

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(data)
    alert(JSON.stringify(data))
  }

  const handleInputChange = (e, name) => {
    setData({...data, [name]: e.currentTarget.value})
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input type="text"
                 value={data.username}
                 onChange={(e) => handleInputChange(e, 'username')}
          />
        </label>
        <label>Password:
          <input type="password"
                 value={data.password}
                 onChange={(e) => handleInputChange(e, 'password')}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login;