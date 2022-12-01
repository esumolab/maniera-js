import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import Head from "../components/head";
import Footer from "../components/Footer";
import FaqHero from "../components/Faq/FaqHero";
import FaqContent from "../components/Faq/FaqContent";
import useMedia from "../components/MediaQuery/MediaQuery";
import NavMobile from "../components/NavMobile";

export default function FaqPage() {
  const { isMobileOrTablet } = useMedia();
  return (
    <>
      <Head title="Manièra - Faq" />
      {isMobileOrTablet && <NavMobile />}
      <FaqHero />
      <FaqContent />
      <Footer />
    </>
  );
}
