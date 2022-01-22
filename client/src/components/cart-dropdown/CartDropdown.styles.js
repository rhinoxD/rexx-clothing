import styled from 'styled-components';
import CustomButton from '../custom-button/CustomButton';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 365px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  color: #000;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
  color: #000;
`;

export const CartItemsContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
