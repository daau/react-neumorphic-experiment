import React from 'react';
import styled from 'styled-components';

const FormField = ({className, children}) => {
  return(
    <div className={className}>
      {children}
    </div>
  )
};

const StyledFormField = styled(FormField)`
  margin-bottom: 1.3em;
`;

export default StyledFormField;