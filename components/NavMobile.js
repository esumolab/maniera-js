import { useState, useContext } from "react";
import Link from "next/link";
import classnames from "classnames";
import useTranslate from "./Translations/useTranslate";
import LangContext from "./Context/langContext";

const navImg = "/ham_circle.png";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useContext(LangContext);
  const trans = useTranslate("nav");

  const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <div className="nav-burger" onClick={toggleNav}>
        <img src={navImg} className="nav-burger__img" />
        <div className={classnames("burger-inner", { open: isOpen })} />
        <div className={classnames("burger-inner", { open: isOpen })} />
        <div className={classnames("burger-inner", { open: isOpen })} />
      </div>
      <div className={classnames("nav-mobile", { open: isOpen })}>
        <ul>
          <li onClick={() => setIsOpen(false)}>
            <a
              href="https://maniera.shoplo.com/"
              target="_blank"
              rel="noreferrer"
            >
              {trans.shop}
            </a>
          </li>
          <li className="nav-mobile__line"></li>
          <li onClick={() => setIsOpen(false)}>
            <a
              href="https://www.moment.pl/maniera-nail-bar"
              target="_blank"
              rel="noreferrer"
            >
              {trans.book}
            </a>
          </li>
          <li className="nav-mobile__line"></li>
          <li>
            <Link href="/team">{trans.team}</Link>
          </li>
          <li className="nav-mobile__line"></li>
          <li>
            <Link href="/pricing">{trans.pricing}</Link>
          </li>
          <li className="nav-mobile__line"></li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="nav-mobile__line"></li>
          <li onClick={setLang}>
            <span>{lang === "pl" ? "en" : "pl"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;
