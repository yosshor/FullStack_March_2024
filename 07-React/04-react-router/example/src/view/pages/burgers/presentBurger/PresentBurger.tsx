import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const PresentBurger = () => {
    const {burgerId} = useParams();
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
       setImageUrl(`https://foodish-api.com/images/burger/burger${burgerId}.jpg`)
    }, [burgerId])


  return (
    <div>
        <h2>Burger {burgerId}</h2>
        <img src={imageUrl} alt="burger" />
    </div>
  )
}

export default PresentBurger