import Link from "next/link";
import classnames from "classnames";

export const LinkBox = ({ link, text, internal, isLight, className }) => {
  const linkClassName = classnames("btn from-right button-wrapper", className, {
    "button-wrapper--light": isLight,
  });

  return internal ? (
    <Link href={link} className={linkClassName}>
      {text}
    </Link>
  ) : (
    <a href={link} rel="noreferrer" target="_blank" className={linkClassName}>
      {text}
    </a>
  );
};

export const LinkBoxMobile = ({ link, text, internal, isLight, className }) => {
  const linkClassName = classnames("mobile-button-wrapper", className, {
    "mobile-button-wrapper--light": isLight,
  });

  return internal ? (
    <Link className={linkClassName} href={link}>
      {text}
    </Link>
  ) : (
    <a href={link} rel="noreferrer" target="_blank" className={linkClassName}>
      {text}
    </a>
  );
};
