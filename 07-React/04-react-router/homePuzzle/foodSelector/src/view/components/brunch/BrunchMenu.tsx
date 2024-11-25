import './BrunchMenu.scss'
import { Link, Outlet } from 'react-router-dom';


const BrunchMenu = () => {
  return (
    <div className='brunch-menu'>
      {/* <h1>Brunch Menu</h1> */}
      <ul className='brunch-menu-list'>
        <li className='title'>Brunch Menu</li>
        <Link to={'AvocadoToast'}><li>Avocado Toast</li></Link>
        <Link to={'FrenchToast'}><li>French Toast</li></Link>
        <Link to={'Shawarma'}><li>Shawarma</li></Link>
        <Link to={'SmokedMeat'}><li>Smoked Meat</li></Link>
        <Link to={'Salad'}><li>Salad</li></Link>
        <Link to={'BeefAsado'}><li>Beef Asado</li></Link>
      </ul>
      <Outlet />
    </div>
  )
}

export default BrunchMenu