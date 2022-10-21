import React,{useState} from 'react';

import './Button.css';

const Button = props => {

  const [changebtn, setChangeBtn] = useState(false);

  const handleButton = () => {
    setChangeBtn(!changebtn);
  }

  return (
    <button type={props.type} className={`button ${(changebtn === true) ? 'btn-blur' : '' }`}  onClick={handleButton} >
      {props.children}
    </button>
  );
};

export default Button;
