/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const ProgressBar = ({ value, size }) => {
  
  const SIZES = {
    small: {
      height: "8px",
      radius: "4px",
      padding: 0,
    },

    medium: {
      height: "12px",
      radius: "4px",
      padding: 0,
    },

    large: {
      height: "16px",
      radius: "8px",
      padding: "4px",
    },
  }
 
  let styles = SIZES[size];

  return (
    
  <Wrapper style={{"padding": styles.padding,
  "--radius": styles.radius, "--height": styles.height,
  }}>
  <ComponentWrapper>
  <Component 
    role="progressbar"
    aria-valuenow={value}
    aria-valuemax="100"
    aria-valuemin="0"
  >
  <VisuallyHidden>{value}</VisuallyHidden>
  </Component> 
  </ComponentWrapper>
  </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

let ComponentWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Component = styled.div`
  height: var(--height);
  width: ${p => p['aria-valuenow']}%;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
