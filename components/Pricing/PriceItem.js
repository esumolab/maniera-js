import { useState, useContext } from "react";
import classnames from "classnames";
import Collapse from "../Collapse";
import LangContext from "../Context/langContext";

const PricingItem = ({ title, prices, subCategories }) => {
  const [open, setOpen] = useState(false);
  const { lang } = useContext(LangContext);

  const renderPrices = () => {
    if (prices)
      return prices.map((p) => (
        <div className="pricing-item__wrapper" key={p.name[lang]}>
          <p className="pricing-item__type">{p.name[lang]}</p>
          <p className="pricing-item__price">{p.price}</p>
        </div>
      ));
    return subCategories.map((category) => {
      return (
        <>
          <p className="pricing-item__categoryTitle">{category.title[lang]}</p>
          {category.prices.map((p) => (
            <div className="pricing-item__wrapper" key={p.name[lang]}>
              <p className="pricing-item__type">{p.name[lang]}</p>
              <p className="pricing-item__price">{p.price}</p>
            </div>
          ))}
        </>
      );
    });
  };

  return (
    <div className="pricing-item">
      <p
        className={classnames("pricing-item__title", {
          "pricing-item__title--open": open,
        })}
        onClick={() => setOpen((prev) => !prev)}
      >
        {title[lang]}
      </p>
      <Collapse open={open}>{renderPrices()}</Collapse>
    </div>
  );
};

export default PricingItem;
