import { useMediaQuery } from "react-responsive";

const useMedia = () => {
  const isSmallDesktop = useMediaQuery({
    query: "(max-width: 1366px)",
  });
  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isSmallMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  return { isMobileOrTablet, isMobile, isSmallDesktop, isSmallMobile };
};

export default useMedia;
