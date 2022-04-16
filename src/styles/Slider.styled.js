import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 7rem;

    padding-right: 0.3rem;
  }
`;

export const Where = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  span {
    font-size: 1rem;
  }
`;

export const Heat = styled.div`
  font-size: 1rem;

  color: ${({ theme }) => theme.grayLight};
  span {
    font-size: 0.3rem;
  }
`;

export const City = styled.h1`
  font-size: 2rem;
  margin: 0 0;
`;
