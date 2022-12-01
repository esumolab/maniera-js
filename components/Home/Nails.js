import { Fragment } from "react";
import { LinkBox, LinkBoxMobile } from "../LinkBox";
import useMedia from "../MediaQuery/MediaQuery";
import Slider from "../Slider";
import { Fade } from "react-awesome-reveal";
import useTranslate from "../Translations/useTranslate";

const nail1 = "/nails/nail1.png";
const nail2 = "/nails/nail2.png";
const nail3 = "/nails/nail3.png";
const nail4 = "/nails/nail4.png";
const nail5 = "/nails/nail5.png";
const nail6 = "/nails/nail6.png";

const nailLuty1 = "/nails/nailLuty1.png";
const nailLuty2 = "/nails/nailLuty2.png";
const nailLuty3 = "/nails/nailLuty3.png";

const nailMarzec1 = "/nails/marzec_1.png";
const nailMarzec2 = "/nails/marzec_2.png";
const nailMarzec3 = "/nails/marzec_3.png";
const nailMarzec4 = "/nails/marzec_4.png";
const nailMarzec5 = "/nails/marzec_5.png";

const images = [nail1, nail2, nail3, nail4, nail5, nail6];

const nailsLuty = [nailLuty1, nailLuty2, nailLuty3];

const nailsMarzec = [
  nailMarzec1,
  nailMarzec2,
  nailMarzec3,
  nailMarzec4,
  nailMarzec5,
];

const Nails = ({ ...props }) => {
  const { isMobileOrTablet } = useMedia();
  const trans = useTranslate("nails");

  const buttonProps = {
    link: "https://www.moment.pl/maniera-nail-bar",
    text: trans.button,
    internal: false,
    className: "button-wrapper--mint",
  };

  const renderNailsForLuty = () => {
    return nailsLuty.map((nail, i) => {
      return (
        <Fragment key={i}>
          <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
          {i != nailsLuty.length - 1 && <div className="nails-wrapper__vl" />}
        </Fragment>
      );
    });
  };

  const renderNailsForMarzec = () => {
    return nailsMarzec.map((nail, i) => {
      return (
        <Fragment key={i}>
          <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
          {i != nailsMarzec.length - 1 && <div className="nails-wrapper__vl" />}
        </Fragment>
      );
    });
  };

  const renderDesktopSlider = () => {
    return (
      <Slider>
        <div className="nails-wrapper__inner">{renderNailsForMarzec()}</div>
        <div className="nails-wrapper__inner">{renderNailsForLuty()}</div>
        <div className="nails-wrapper__inner">
          {images.map((nail, i) => (
            <Fragment key={i}>
              <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
              {i != images.length - 1 && <div className="nails-wrapper__vl" />}
            </Fragment>
          ))}
        </div>
      </Slider>
    );
  };

  const renderMobileSlider = () => {
    return (
      <Slider>
        <div className="nails-wrapper__inner">
          <img
            src={nailsMarzec[0]}
            alt="paznokieć"
            className="nails-wrapper__nail"
          />
          <div className="nails-wrapper__vl" />
          <img
            src={nailsMarzec[1]}
            alt="paznokieć"
            className="nails-wrapper__nail"
          />
          <div className="nails-wrapper__vl" />
          <img
            src={nailsMarzec[2]}
            alt="paznokieć"
            className="nails-wrapper__nail"
          />
        </div>
        <div className="nails-wrapper__inner">
          <img
            src={nailsMarzec[3]}
            alt="paznokieć"
            className="nails-wrapper__nail"
          />
          <div className="nails-wrapper__vl" />
          <img
            src={nailsMarzec[4]}
            alt="paznokieć"
            className="nails-wrapper__nail"
          />
        </div>
        <div className="nails-wrapper__inner">{renderNailsForLuty()}</div>
        <div className="nails-wrapper__inner">
          <img
            src={images[0]}
            alt="paznokieć"
            className="nails-wrapper__nail"
          />
          <div className="nails-wrapper__vl" />
          <img
            src={images[1]}
            alt="paznokieć"
            className="nails-wrapper__nail"
          />
          <div className="nails-wrapper__vl" />
          <img
            src={images[2]}
            alt="paznokieć"
            className="nails-wrapper__nail"
          />
        </div>
        <div className="nails-wrapper__inner">
          <img
            src={images[3]}
            alt="paznokieć"
            className="nails-wrapper__nail"
          />
          <div className="nails-wrapper__vl" />
          <img
            src={images[4]}
            alt="paznokieć"
            className="nails-wrapper__nail"
          />
          <div className="nails-wrapper__vl" />
          <img
            src={images[5]}
            alt="paznokieć"
            className="nails-wrapper__nail"
          />
        </div>
      </Slider>
    );
  };

  return (
    <section {...props} className="section">
      <div className="nails">
        <Fade bottom>
          <p className="nails-title">- STYLED BY MANIERA -</p>
        </Fade>
        <Fade bottom>
          <h2 className="nails-subtitle">{trans.subtitle}</h2>
        </Fade>
        <Fade bottom delay={200}>
          <div className="nails-wrapper">
            {isMobileOrTablet ? renderMobileSlider() : renderDesktopSlider()}
          </div>
        </Fade>
        <Fade bottom delay={500}>
          {isMobileOrTablet ? (
            <LinkBoxMobile {...buttonProps} />
          ) : (
            <LinkBox {...buttonProps} />
          )}
        </Fade>
      </div>
    </section>
  );
};

export default Nails;
