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
  font-weight: 100;

  color: ${({ theme }) => theme.grayLight};
  span {
    font-size: 0.3rem;
  }
`;

export const City = styled.h1`
  cursor: pointer;
  font-size: 2rem;
  width: 100%;
  margin: 0 0;
  background-color: ${({ theme }) => theme.grayDarkest};
  padding: 0.4rem;
`;
