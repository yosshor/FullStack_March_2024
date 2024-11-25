import { Link } from 'react-router-dom';
import './EveningMenu.scss';
import { Outlet } from 'react-router-dom'

const EveningMenu = () => {
  return (
    <div className='evening-menu'>
      <ul className='evening-menu-list'>
        <li className='title'>Evening Menu</li>
        <Link to='Steak'><li>Steak</li></Link>
        <Link to='Pasta'><li>Pasta</li></Link>
        <Link to='Salmon'><li>Salmon</li></Link>
        <Link to='Chicken'><li>Chicken</li></Link>
        <Link to='Soup'><li>Soup</li></Link>
        <Link to='Dessert'><li>Dessert</li></Link>
      </ul>
      <Outlet />
    </div>
  );
}

export default EveningMenu