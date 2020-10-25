import React from 'react';

const Button = props => {
  return (
    <>
      <button type={props.type} className={'d-block ml-auto ui_button'}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
