import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 30px
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;