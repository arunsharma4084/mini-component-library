import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
    <SelectComponent value={value} onChange={onChange}>
      {children}
    </SelectComponent>
    <PresentationalBit>
      {displayedValue}
      <IconWrapper><Icon id="chevron-down"></Icon> </IconWrapper>
    </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectComponent = styled.select`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 opacity: 0;
`;

const PresentationalBit  = styled.div`
 padding: 12px 16px;
 padding-right: 52px;
 color: ${COLORS.gray700};
 font-size: ${16/16}rem;
 background-color: ${COLORS.transparentGray15};
 border-radius: 8px;

 ${SelectComponent}:focus + &{
   outline: 1px solid ${COLORS.primary};
 }

 ${SelectComponent}:hover + &{
   color: ${COLORS.black};
 }
`;

const IconWrapper = styled.div`
  position: absolute;
  height: 24px;
  top: 0;
  bottom: 0;
  right: 4px;
  margin: auto;
  pointer-events: none;
`;

export default Select; 
