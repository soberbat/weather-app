import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  padding: 5rem 2rem;
  height: 100vh;
  overflow-x: hidden;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 950px;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
// export const Inner = styled.div``;
// export const Inner = styled.div``;
// export const Inner = styled.div``;
// export const Inner = styled.div``;
