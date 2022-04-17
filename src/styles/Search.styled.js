import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const SearchInput = styled.input.attrs({ type: "input" })`
  border-radius: 7px;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.grayTextTone};
  width: 60%;
  border: none;
  :focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.grayTextTone};
  color: ${({ theme }) => theme.gray};
  border: none;
  border-radius: 7px;
  display: inline-block;
  padding: 0.5rem;
  cursor: pointer;
`;
