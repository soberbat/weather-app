import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const SwiperContainer = styled.div`
  position: relative;
`;

export const NavigateNext = styled.span`
  position: absolute;
  bottom: 0;
  right: -50px;
  z-index: 500;
`;

export const NavigatePrev = styled.span`
  position: absolute;
  bottom: 0;
  left: -50px;
  z-index: 500;
`;

export const Heading = styled.div`
  h1 {
    color: ${({ theme }) => theme.black};
    font-size: 5rem;
    margin-bottom: 1rem;
    margin-top: 0;
  }
  span {
    color: ${({ theme }) => theme.grayLight};
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

//FRAMER MOTİON PROPS

export const SwiperProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
//FRAMER MOTİON PROPS
