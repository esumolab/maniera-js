import Hero from "./Hero";
import Instagram from "./Instagram";
import Main from "./Main";
import Services from "./Services";
import Pricing from "./Pricing";
import Wine from "./Wine";
import Nails from "./Nails";
import Hands from "./Hands";
import Team from "./Team";
import Phone from "./Phone";
import Contact from "./Contact";
import useMedia from "../MediaQuery/MediaQuery";
import useIE from "../../helpers/ie";
import { IndicatorWrapper } from "../IndicatorWrapper";
import { useIndicator } from "../../hooks/useIndicator";

const SECTIONS = [
  Main,
  Hero,
  Services,
  Pricing,
  Wine,
  Nails,
  Hands,
  Team,
  Phone,
  Contact,
  Instagram,
];

const Home = () => {
  const { isMobileOrTablet } = useMedia();
  const isIE = useIE();
  const { activeElementIndex, handleIndicatorClick, container, indicator } =
    useIndicator();

  return (
    <>
      {isMobileOrTablet || isIE ? (
        <>
          {SECTIONS.map((Section, index) => (
            <Section key={index} />
          ))}
        </>
      ) : (
        <>
          <IndicatorWrapper
            numberOfElements={SECTIONS.length}
            activeElementIndex={activeElementIndex}
            ref={indicator}
            onClick={handleIndicatorClick}
          />
          <div ref={container} className="scroll-wrapper">
            {SECTIONS.map((Section, index) => (
              <Section id={index} key={index} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
