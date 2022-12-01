import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";


import Head from "../components/head";
import NavMobile from "../components/NavMobile";
import useMedia from "../components/MediaQuery/MediaQuery";
import Home from "../components/Home/Home";

export default function HomePage() {
  const { isMobileOrTablet } = useMedia();
  return (
    <>
      <Head title="Manièra" />
      {isMobileOrTablet && <NavMobile />}
      <Home />
    </>
  );
}
