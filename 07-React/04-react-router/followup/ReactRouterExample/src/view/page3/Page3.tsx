import { Link } from 'react-router-dom'

export const Page3 = () => {
  return (
    <div className='page' style={{backgroundColor:'yellow', color:'black'}}>
        <h1>Page3</h1>
        <Link to={'/'}>Go to page 1</Link>
        <Link to={'/2'}>Go to page 2</Link>
    </div>
  )
}

export default Page3