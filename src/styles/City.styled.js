import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.black};
  height: 100vh;
  overflow: hidden;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: scroll;
    div:nth-child(1) {
      width: 100%;
      height: 25%;
    }
    div:nth-child(2) {
      width: 100%;
      border: none;
    }
  }
`;

export const VideoContainer = styled.div`
  height: 100%;
  width: 68%;
`;

export const Controls = styled.div``;

export const SideBar = styled.div`
  height: 100%;
  width: 33%;
  border-left: 1px solid ${({ theme }) => theme.grayTextTone};
`;
