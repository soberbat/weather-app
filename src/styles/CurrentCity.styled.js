import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled(motion.div)`
  display: flex;
  padding: 1rem;
  justify-content: space-between;

  border-radius: 15px;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
  background-color: ${({ theme }) => theme.grayDark};
  transition: all 0.5s ease-in-out;

  :hover {
    transform: translateY(-10px);
    -webkit-box-shadow: 0px 0px 10px 5px rgba(5, 5, 10, 0.07);
    box-shadow: 0px 0px 10px 5px rgba(5, 5, 10, 0.07);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    div:nth-child(1) {
      border: none;
    }
  }
`;

export const Weather = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.grayTextTone};

  img {
    width: 15rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.grayTextTone};

  h1 {
    font-size: 5rem;
    margin: 0;
  }

  span {
    font-size: 3rem;
    font-weight: 100;

    span {
      font-size: 1rem;
    }
  }
`;

export const CityDetails = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Location = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  color: ${({ theme }) => theme.grayLight};

  span {
    display: inline-block;
    font-weight: 100;
    font-size: 1.5rem;
    align-self: center;
  }

  span:nth-child(1) {
    border-right: 1px solid ${({ theme }) => theme.grayTextTone};
    padding-right: 0.3rem;
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.grayTextTone};

    @media (max-width: 768px) {
      border: none;
    }
  }
`;

export const Boxes = styled.div`
  display: flex;
  gap: 0.3rem;

  div {
    background-color: ${({ theme }) => theme.grayDarkest};
    color: ${({ theme }) => theme.grayTextTone};
    font-weight: 100;
    padding: 0.4rem 1.3rem;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    span:nth-child(2) {
      color: ${({ theme }) => theme.grayLight};
    }
  }
`;

export const Note = styled(motion.span)`
  color: ${({ theme }) => theme.grayLight};
  text-align: right;
  display: block;
  font-weight: lighter;
`;

export const NoteProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
};
