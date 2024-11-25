import React from 'react'
import './Home.scss'
import { Link, Outlet } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
            <div className="wrapper-menu">
                <div className="menu-title">
                    <Link to={'/Home'}><h2>Menu</h2></Link>
                </div>
                <div className="morning">
                    <Link to={'/morning-menu'}><h3>Morning</h3></Link>
                </div>
                <div className="brunch">
                    <Link to={'/brunch-menu'}><h3>Brunch</h3></Link>
                </div>
                <div className="evening">
                    <Link to={'/evening-menu'}><h3>Evening</h3></Link>
                </div>

            </div>
            <Outlet />

        </>
    );
}


export default Home