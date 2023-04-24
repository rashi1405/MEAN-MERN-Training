import { useState } from "react"
import { useUsersContext } from "../hooks/useUsersContext"

const UserForm = () => {

   const { dispatch } = useUsersContext()

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {name , email, password}

        //fetch request to post a new data
        const response = await fetch('/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
        setError(null)
        setName('')
        setEmail('')
        setPassword('')
        dispatch({type: 'CREATE_USER', payload: json})
      }
  
    }

    return(
        <form className="create" onSubmit={handleSubmit}> 
        <h3>Add a New User</h3>
  
        <label>User Name:</label>
        <input 
          type="string" 
          onChange={(e) => setName(e.target.value)} 
          value={name}
        />
  
        <label>Email :</label>
        <input 
          type="string" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
  
        <label>Password :</label>
        <input 
          type="number" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
  
        <button>Add User</button>
        {error && <div className="error">{error}</div>}
      </form>
    )
}

export default UserForm