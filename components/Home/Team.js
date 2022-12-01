import { Fade } from "react-awesome-reveal";
import useTranslate from "../Translations/useTranslate";
import Link from "next/link";

const arrow = "/arrow.png";

const Team = ({ ...props }) => {
  const trans = useTranslate("team");

  return (
    <section {...props} className="section">
      <div className="team">
        <Fade bottom>
          <div className="team-photo" />
        </Fade>
        <Fade bottom cascade delay={200}>
          <div className="team-info">
            <div>
              <Link href="/team">
                <img className="team-info__arrow" src={arrow} alt="strzałka" />
              </Link>
            </div>
            <p className="team-info__name">MAGDALENA</p>
            <p className="team-info__role">{trans.role}</p>
            <p className="team-info__desc">{trans.desc}</p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Team;
