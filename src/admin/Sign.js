import React, {useState} from 'react'
import axios from '../axios/axios'

const Sign = props => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const changeHandler = e => {
    setForm({...form}, ([e.target.name] = e.target.value))
  }

  const registerHandler = e => {
    e.preventDefault()
    axios.post('/admin/register', {
      form,
    })
  }

  return (
    <div className="sign-admin">
      <form action={props.action}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={changeHandler}
          />
        </div>
        <input
          type="submit"
          className="submit"
          value="Sign in"
          onClick={props.action}
        />
      </form>

      <form>
        <input type="text" name="username" onChange={changeHandler} />
        <input type="password" name="password" onChange={changeHandler} />
        <input type="submit" value="sign up" onSubmit={registerHandler} />
      </form>
    </div>
  )
}

export default Sign
