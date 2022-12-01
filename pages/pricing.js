import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import Head from "../components/head";
import PricingHero from "../components/Pricing/PricingHero";
import Footer from "../components/Footer";
import PricingContent from "../components/Pricing/PricingContent";
import useMedia from "../components/MediaQuery/MediaQuery";
import NavMobile from "../components/NavMobile";

export default function PricingPage() {
  const { isMobileOrTablet } = useMedia();
  return (
    <>
      <Head title="Manièra - Cennik" />
      {isMobileOrTablet && <NavMobile />}
      <PricingHero />
      <PricingContent />
      <Footer />
    </>
  );
}
