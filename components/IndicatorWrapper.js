import { forwardRef } from "react";

export const IndicatorWrapper = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="indicator-wrapper">
      {[...Array(props.numberOfElements)].map((e, i) => (
        <div
          id={i}
          key={i}
          className={props.activeElementIndex === i ? "active" : ""}
          onClick={() => props.onClick(i)}
        >
          <div></div>
        </div>
      ))}
    </div>
  );
});

IndicatorWrapper.displayName = "IndicatorWrapper";
