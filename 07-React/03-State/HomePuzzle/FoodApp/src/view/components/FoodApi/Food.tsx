import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'
import './Food.scss'





const Food = () => {
    const [foodUrl, setFoodUrl] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        setLoading(true)
        fetch('https://foodish-api.com/api/')
            .then(res => res.json())
            .then(data => {
                setFoodUrl(data.image);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError(true);
                setLoading(false);
            });
        console.log(foodUrl)
    }, [])



    return (
        <>
            <div>Food</div>
            <div className="food-img">
                {loading ? <div>Loading...</div> : error ? <div>Error... {error}</div> :
                 <img  src={foodUrl} alt="food" />}
            </div>
        </>
    )
}

export default Food