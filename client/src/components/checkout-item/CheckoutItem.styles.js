import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media (max-width: 800px) {
    width: 330px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
  @media (max-width: 800px) {
    font-size: 18px;
    justify-content: center;
    text-align: center;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    align-items: center;
    padding-left: 0.7rem;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
