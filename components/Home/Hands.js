import Circle from "../Circle";
import useTranslate from "../Translations/useTranslate";

const Hands = ({ ...props }) => {
  const trans = useTranslate("hands");
  return (
    <section {...props} className="section">
      <div className="hands">
        <Circle text={trans.circle} />
      </div>
    </section>
  );
};

export default Hands;
