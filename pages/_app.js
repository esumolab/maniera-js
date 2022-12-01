import React from "react";
import Container from "../components/Container";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
