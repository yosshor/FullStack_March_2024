import { useEffect, useState } from 'react'
import './App.css'
import { setCounterToDB } from './controllers/db/counter/setCounter'
import { listenToCounter } from './controllers/db/counter/getCounter'
import { addMessageToDB } from './controllers/db/messages/setmessage'
import { listenToMessages } from './controllers/db/messages/getMessage'

function App() {
  const [count, setCount] = useState(0)
  const [messages,setMessages] = useState<string[]>([])

  useEffect(() => {
   const unsubscribeCounter = listenToCounter(setCount);
   const unsubscribeMessages = listenToMessages(setMessages);

   return () => {
     unsubscribeCounter();
     unsubscribeMessages();
   };

  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.valueAsNumber;
    if (value)
      setCounterToDB(value);

  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('submit');
    const message = e.target.elements?.message?.value;
    console.log(message);
    
    addMessageToDB(message);
    e.currentTarget.reset(); // Reset the form after submission
  }

  return (
    <div>
      {count}
      <input type="number" onChange={handleChange} />

      <form onSubmit={handleSubmit}> {/* Add onSubmit handler to the form */}
        <input type="text" name="message" id="" />
        <button type="submit">Send</button>
      </form>
      {messages.map((message, index) => (<p key={index}>{message}</p>))}
    </div>

  )
}

export default App
