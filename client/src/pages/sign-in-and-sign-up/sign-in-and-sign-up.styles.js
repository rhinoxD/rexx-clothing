import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    width: auto;
    flex-direction: column;
  }
`;
