import {FC} from 'react';

import './Card.scss';

interface Props{
    title: string;
}

const Card:FC<Props> = ({title}) => {
  return <div className="card">{title}</div>;
};

export default Card;
