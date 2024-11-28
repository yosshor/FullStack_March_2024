import { FC, useState } from "react";
import "./Button.scss";

interface Props {
  isBigButton?: boolean; 
}

const Button: FC<Props> = ({ isBigButton }) => {
  const [isYellow, setIsYellow] = useState(true); 
  const [isHover, setIsHover] = useState(false); 
  const [isClicked, setIsClicked] = useState(false); 

  function handleClick() {
    setIsYellow(!isYellow); 
    setIsClicked(true); 
    setTimeout(() => setIsClicked(false), 300); 
  }

  function handleMouseEnter() {
    setIsHover(true); 
  }

  function handleMouseLeave() {
    setIsHover(false); 
  }

  const buttonStyle = {
    backgroundColor: isYellow ? "yellow" : "white", 
    transform: isClicked ? "scale(1.1)" : "scale(1)", 
    boxShadow: isHover
      ? "3px 3px 9px rgba(0, 0, 0, 0.5)"
      : "1px 1px 3px rgba(0, 0, 0, 0.3)", 
    transition: "all 0.2s ease-in-out", 
  };

  if (isBigButton) {
    return (
      <button
        className="big-button"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={buttonStyle} 
      >
        Big Button
      </button>
    );
  }

  return (
    <button
      className="small-button"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={buttonStyle}
    >
      Small Button
    </button>
  );
};

export default Button;
