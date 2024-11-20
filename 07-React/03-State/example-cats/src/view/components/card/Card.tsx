import { FC } from "react";
import './Card.scss';
interface Props {
  url: string | undefined;
  color: string;
}

const Card: FC<Props> = ({ url, color }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img src={url} />
    </div>
  );
};

export default Card;
