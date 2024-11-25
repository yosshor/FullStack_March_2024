import { FC, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { fetchFoodData } from '../../../../utils/fetchFoodData'
import '../../showImg.scss'


interface FoodProps {
  food: string
}

const Omelette : FC<FoodProps> = ({ food }) => {
  const [foodName, setFoodName] = useState('')
  const title = food.charAt(0).toUpperCase() + food.slice(1)

  var style = {
    color: 'red',
    fontSize: '50px',

  }




  useEffect(() => {
    const fetchData = async () => {
      document.title = title;
      const imgUrl = await fetchFoodData(food);
      console.log(imgUrl);
      setFoodName(imgUrl);
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="show-img">
        <h1 style={style}>{title}</h1>
        <div className="wrapper">
          <div className='image'>
            <img src={foodName} alt={food} />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Omelette