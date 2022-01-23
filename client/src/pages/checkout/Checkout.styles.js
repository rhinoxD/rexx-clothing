import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgrey;
  @media (max-width: 800px) {
    width: 330px;
  }
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media (max-width: 800px) {
    width: auto;
    text-align: center;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media (max-width: 800px) {
    margin: 20px 20px 0 20px;
    text-align: center;
    font-size: 28px;
  }
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
  @media (max-width: 800px) {
    margin-top: 15px;
    font-size: 18px;
  }
`;
