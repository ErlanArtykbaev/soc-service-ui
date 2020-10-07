import React, {useState} from 'react'

const Sign = (props) => {
	const [form, setForm] = useState({
		username: '', password: ''
	})

	const changeHandler = e => {
		setForm({...form}, [e.target.name] = e.target.value)
	}

  return(
    <div className='sign-admin'>
      <form action={props.action}>
        <div>
          <label htmlFor='username'>Username</label>
					<input 
						type='text' 
						id='username' 
						name='username' 
						onChange={changeHandler}
					/>
        </div>
        <div>
          <label htmlFor='password'>password</label>
					<input 
						type='password' 
						id='password' 
						name='password' 
						onChange={changeHandler}
					/>
        </div>
				<input 
					type='submit' 
					className='submit' 
					value='Sign in' 
					onClick={props.action} 
				/>
      </form>

    </div>
  )
}

export default Sign
