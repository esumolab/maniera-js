import { useContext } from "react";
import Link from "next/link";
import classnames from "classnames";
import InnerLink from "./InnerLink";
import useTranslate from "./Translations/useTranslate";

import LangContext from "./Context/langContext";

const Nav = ({ isBlack }) => {
  const { lang, setLang } = useContext(LangContext);
  const trans = useTranslate("nav");

  return (
    <nav>
      <ul>
        <li>
          <a
            href="https://maniera.shoplo.com/"
            target="_blank"
            rel="noreferrer"
            className={classnames({ black: isBlack })}
          >
            <InnerLink text={trans.shop} />
          </a>
        </li>
        <li>
          <a
            href="https://www.moment.pl/maniera-nail-bar"
            target="_blank"
            rel="noreferrer"
            className={classnames({ black: isBlack })}
          >
            <InnerLink text={trans.book} />
          </a>
        </li>
        <li>
          <Link className={classnames({ black: isBlack })} href="/team">
            <InnerLink text={trans.team} />
          </Link>
        </li>
        <li>
          <Link href="/pricing">
            <InnerLink
              className={classnames({ black: isBlack })}
              text={trans.pricing}
            />
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <InnerLink className={classnames({ black: isBlack })} text="FAQ" />
          </Link>
        </li>
        <li onClick={setLang}>
          <span>
            <InnerLink
              className={classnames({ black: isBlack })}
              text={lang === "pl" ? "en" : "pl"}
            />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
