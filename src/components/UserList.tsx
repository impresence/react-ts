import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../store/action-creators/user'

export default function UserList() {
    const {error, loading, users} = useTypedSelector(state => state.user)
    console.log('console log')
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

  return (
    <div>
        {users.map(user => 
            <div>{user.name}</div>    
        )}
    </div>
  )
}
