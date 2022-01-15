import React from 'react';

import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer className='custom-button' {...otherProps}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
