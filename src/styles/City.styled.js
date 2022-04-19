import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.black};
  height: 100vh;
  overflow: hidden;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: scroll;

    div:nth-child(2) {
      width: 100%;
    }
  }
`;

export const VideoContainer = styled(motion.div)`
  height: 100%;
  width: 75%;
  position: relative;

  //VİDEO CONTAİNER MEDİA QUERY
  @media (max-width: 768px) {
    width: 100%;
    height: 30%;
  }
`;

export const Controls = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  color: white;

  @media (max-width: 768px) {
    height: 100%;
    top: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Weather = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  gap: 2rem;
  font-size: 2rem;
  h1 {
    font-size: 15rem;
    margin: 0;
    padding: 0;
  }

  div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    span {
      display: block;
      font-weight: 700;
    }

    span:nth-child(2) {
      font-weight: 100;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
    text-align: center;
    gap: 0rem;

    h1 {
      font-size: 3rem;
      padding: 0;
    }

    div {
      gap: 0;
      font-size: 1rem;
    }
  }
`;

export const HourCityContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
    align-items: center;
    width: 100%;
    border: none;
    justify-content: center;
    > span {
      display: none;
    }
  }
`;

export const CityChange = styled.div`
  display: flex;
  align-items: center;
  border: none;
  gap: 2rem;
  span {
    font-size: 1.5rem;
  }

  button {
    background-color: transparent;
    border: 0.1px solid ${({ theme }) => theme.grayTextTone};
    color: ${({ theme }) => theme.grayTextTone};
    padding: 0.3rem 1.2rem;
  }
`;

export const SideBar = styled(motion.div)`
  height: 100%;
  width: 25%;
  border-left: 1px solid ${({ theme }) => theme.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SBCity = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  border-top: 1px solid ${({ theme }) => theme.gray};
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem;
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.grayTextTone};
    margin-right: 1rem;
    font-weight: 500;
    span {
      font-weight: 100;
      color: ${({ theme }) => theme.gray};
      font-size: 0.8rem;
    }
  }

  button {
    background-color: transparent;
    border: 0.1px solid ${({ theme }) => theme.grayTextTone};
    color: ${({ theme }) => theme.grayTextTone};
    padding: 0.3rem 1.2rem;
  }
`;

export const WeatherDetails = styled.div`
  padding: 1.6rem 2rem;
  border-bottom: 0.1px solid ${({ theme }) => theme.gray};

  h1 {
    font-size: 1rem;
    color: ${({ theme }) => theme.grayTextTone};
    font-weight: 500;
    margin-bottom: 1.4rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    span:nth-child(1) {
      font-weight: 100;
      color: ${({ theme }) => theme.gray};
    }

    span:nth-child(2) {
      color: ${({ theme }) => theme.grayTextTone};
    }
  }
`;

export const FramerSideBar = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
      ease: "backInOut",
    },
  },
};

export const FramerVideoContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 0.4,
      ease: "anticipate",
    },
  },
};
