import './MorningMenu.scss'
import { Link, Outlet } from 'react-router-dom';


const MorningMenu = () => {
  return (
    <div className='morning-menu'>
      <ul className='morning-menu-list'>
      <li className='title'>Morning Menu</li>
      <Link to='Pancakes'><li>Pancakes</li></Link>
      <Link to='Omelette'><li>Omelette</li></Link>
      <Link to='PotatoSalad'><li>Potato Salad</li></Link>
      <Link to='RoastedEggplant'><li>Roasted Eggplant</li></Link>
      <Link to='FruitSalad'><li>Fruit Salad</li></Link>
      <Link to='Yogurt'><li>Yogurt</li></Link>
    </ul>
      <Outlet />
    </div>
  )
}

export default MorningMenu