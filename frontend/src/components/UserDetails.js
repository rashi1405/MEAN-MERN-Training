import { useUsersContext } from '../hooks/useUsersContext'

const UserDetails = ({ user }) => {
    const { dispatch } = useUsersContext()

    const handleClick = async () => {
       const response = await fetch('/users/' + user._id , {
        method:'DELETE',
       })
       const json = await response.json()
     
       if (response.ok) {
        dispatch({type: 'DELETE_USER', payload: json})
      }
    }
    return (
        <div className="user-details">
            <h4>{user.name}</h4>
            <p><strong> EMAIL : </strong>{user.email}</p>
            <p><strong>Password </strong>{user.password}</p>
            <p>{user.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default UserDetails

