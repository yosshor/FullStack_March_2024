import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './components/Auth'
import { setCounterToDb } from './controllers/counter/setCounter'
import { listenToCounter } from './controllers/counter/getCounter'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './controllers/db/firebaseConfig'
import { setUser } from './controllers/user/setUser'
import { listenToUsers } from './controllers/user/getUsers'
import { deleteUser } from './controllers/user/deleteUser'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<{ name: string, email: string, password: string }[]>([])


  useEffect(() => {
    const unsubscribe = listenToCounter(setCount)
    const unsubscribeUsers = listenToUsers(setUsers);

    return () => {
      unsubscribe();
      unsubscribeUsers();
    }
  }, [])


  const handleCountChange = (value: number) => {
    setCounterToDb(value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('form submitted')
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(name, email, password)
    await setUser(name as string, email as string, password as string)
    console.log('user set')
    // const user = await createUserWithEmailAndPassword(auth, email as string, password as string)
    // console.log(user)
  }

  const handleDelete = async (email: string) => {
    // Cannot directly pass local user object to deleteUser
    // Need to get the Firebase auth user first
    const userToDelete = users.find(user => user.email === email)
    if (userToDelete) {
      // Delete from our database instead of trying to delete auth user
      await deleteUser(userToDelete.email)
    }
  }

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <input
          type="number"
          value={count}
          onChange={(e) => handleCountChange(Number(e.target.value))}
        />
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" placeholder='name' />
          <input type="text" name="email" id="email" placeholder='email' />
          <input type="text" name="password" id="password" placeholder='password' />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div>
        {users.map((user, index) => (
          <div key={user.name + index} style={{
            border: '1px solid black', padding: '10px',
            margin: '10px', display: 'flex',
            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
          }}  >
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <button style={{ backgroundColor: 'red', color: 'white',
                             padding: '5px', borderRadius: '5px', cursor: 'pointer' }}
              onClick={() => handleDelete(user.email)}>Delete</button>

          </div>
        ))}
      </div>
    </>
  )
}

export default App
