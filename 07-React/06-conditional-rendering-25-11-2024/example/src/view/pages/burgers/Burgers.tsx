import { Link, Outlet } from "react-router-dom";

const Burgers = () => {
  return <div className="page">
    <h1>Burgers</h1>
    <nav>
        <Link to="">No Burger</Link>
        <Link to="3">Burger 1</Link>
        <Link to="5">Burger 2</Link>
    </nav>
    <Outlet />
    </div>;
};

export default Burgers;
