import Link from "next/link";
const logoWhite = "/logo_white.png";
const logoBlack = "/logo.png";

const Logo = ({ isBlack }) => (
  <Link href="/">
    <img
      src={isBlack ? logoBlack : logoWhite}
      alt="maniera nail + face bar"
      className="app-logo"
    />
  </Link>
);

export default Logo;
