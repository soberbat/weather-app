import { ThemeProvider } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { theme, GlobalStyle } from "../src/styles/GlobalStyles.styled";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            backgroundColor: "white",
            filter: `invert()`,
            opacity: 0,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </ThemeProvider>
  );
}

export default MyApp;
