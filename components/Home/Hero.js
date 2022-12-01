import { Fade } from "react-awesome-reveal";
import useTranslate from "../Translations/useTranslate";

const Hero = ({ ...props }) => {
  const trans = useTranslate("hero");
  return (
    <section {...props} className="section">
      <div className="hero">
        <Fade bottom>
          <p className="hero-text hero-text__top">{trans.top}</p>
        </Fade>
        <Fade bottom>
          <p className="hero-text hero-text__bottom">
            <span className="hero-text--italic">{trans.visit}</span> <br />
            {trans.bottom}
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
