import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import Head from "../components/head";
import Footer from "../components/Footer";
import useMedia from "../components/MediaQuery/MediaQuery";
import NavMobile from "../components/NavMobile";
import TeamContent from "../components/Team/TeamContent";

export default function TeamPage() {
  const { isMobileOrTablet } = useMedia();

  return (
    <>
      <Head title="Manièra - Nasz zespół" />
      {isMobileOrTablet && <NavMobile />}
      <TeamContent />
      <Footer />
    </>
  );
}
