import { useContext } from "react";
import { ThemeContext } from "../../AppCont";

const Header = () => {
 
  const {mode,toggleTheme} = useContext(ThemeContext);

  return (
    <div >
     theme: {mode}
<button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

export default Header;
