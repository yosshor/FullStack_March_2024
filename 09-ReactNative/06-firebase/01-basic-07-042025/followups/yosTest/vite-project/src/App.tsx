import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './components/Auth'
import { setCounterToDb } from './controllers/counter/setCounter'
import { listenToCounter } from './controllers/counter/getCounter'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './controllers/db/firebaseConfig'
import { setUser } from './controllers/user/setUser'
import { listenToUsers } from './controllers/user/getUsers'
import { deleteUser } from './controllers/user/deleteUser'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<{ name: string, email: string, password: string }[]>([])
  const [user, setUser] = useState(null)

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
    const form = e.target as HTMLFormElement
    form.reset();
  }

  const handleDelete = async (email: string) => {
    // Cannot directly pass local user object to deleteUser
    // Need to get the Firebase auth user first

    try {
      const result = await deleteUser(email);
      console.log("Delete operation result:", result);
    } catch (error) {
      console.error("delete failed:", error);
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-In successful:", user);

      // You might want to save the user to your users collection
      if (user.email && user.displayName) {
        await setUser(user.displayName, user.email, "google-auth");
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };
  const inputStyle = {
    margin: '10px', padding: '10px', borderRadius: '15px', border: '1px solid black',
    borderColor: 'blue', width: '200px'
  }

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <input
          style={{
            margin: '10px', padding: '10px', borderRadius: '15px', border: '1px solid black',
            borderColor: 'blue', width: '200px'
          }}
          type="number"
          value={count}
          onChange={(e) => handleCountChange(Number(e.target.value))}
        />
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" placeholder='name' style={inputStyle} />
          <input type="text" name="email" id="email" placeholder='email' style={inputStyle} />
          <input type="text" name="password" id="password" placeholder='password' style={inputStyle} />
          <button type="submit" style={{
            margin: '10px', padding: '10px', borderRadius: '15px', border: '1px solid black',
            backgroundColor: 'blue', color: 'white',
            borderColor: 'blue', width: '200px'
          }}>Sign Up</button>
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
            <button style={{
              backgroundColor: 'red', color: 'white',
              padding: '5px', borderRadius: '5px', cursor: 'pointer'
            }}
              onClick={() => handleDelete(user.email)}>Delete</button>

          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={handleGoogleSignIn}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4285F4',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            style={{ width: '20px', height: '20px' }}
          />
          Sign in with Google
        </button>
      </div>
    </>
  )
}

export default App
