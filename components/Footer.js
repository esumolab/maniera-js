import Link from "next/link";
import InnerLink from "../styles/home/InnerLink";
import useTranslate from "./Translations/useTranslate";

const Footer = () => {
  const trans = useTranslate("nav");

  return (
    <footer className="footer">
      <ul className="footer-list">
        <li>
          <a
            href="https://www.moment.pl/maniera-nail-bar"
            target="_blank"
            rel="noreferrer"
          >
            <InnerLink text={trans.book} />
          </a>
        </li>
        {/* <li>
					<Link href="/pricing">
						<InnerLink text={trans.team} />
					</Link>
				</li> */}
        <li>
          <Link href="/pricing">
            <InnerLink text={trans.pricing} />
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <InnerLink text="FAQ" />
          </Link>
        </li>
      </ul>
      <ul className="footer-list footer-list--address">
        <li>Manièra Nail & Face Bar</li>
        <li>Mokotowska 39, Warszawa</li>
        <li>{trans.phone} +48 787 00 39 39</li>
      </ul>
      <ul className="footer-list">
        <li className="footer-list__follow">FOLLOW US</li>
        <li>
          <a
            href="https://www.instagram.com/maniera_nail_face_bar_/"
            target="_blank"
            rel="noreferrer"
          >
            <InnerLink text="Instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/manieranailbar"
            target="_blank"
            rel="noreferrer"
          >
            <InnerLink text="Facebook" />
          </a>
        </li>
      </ul>
      <div className="footer-authors">
        <div>
          {trans.madeBy}:&nbsp;
          <a
            href="https://www.instagram.com/domi.suszek/"
            target="_blank"
            className="footer-authors__text"
            rel="noreferrer"
          >
            Domi.Suszek{" "}
          </a>
          <a href="" target="_blank" className="footer-authors__text">
            J.Gostkiewicz{" "}
          </a>
          <a
            href="https://www.instagram.com/_kacapka/"
            target="_blank"
            className="footer-authors__text"
            rel="noreferrer"
          >
            W.Urbański
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
