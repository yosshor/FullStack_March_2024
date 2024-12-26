
import { Link, Outlet } from "react-router-dom";

const Page2 = () => {
  return (
    <div className="page">
      <p>Page2</p>
      <Link to="/">Go to Page1</Link>
      <nav>
        <Link to="element-a">Go to ElementA</Link>
        <Link to="element-b">Go to ElementB</Link>
        <Link to="">Go to base</Link>
      </nav>
      <div className="element">
        <Outlet />
      </div>
    </div>
  );
};

export default Page2;
