import { useRef, useEffect, useState } from "react";
import useMedia from "../components/MediaQuery/MediaQuery";

export const useIndicator = () => {
  const container = useRef(null);
  const indicator = useRef(null);
  const { isMobileOrTablet } = useMedia();
  const [activeElementIndex, setActiveElementIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    if (!container || !container.current) return;
    const carouselElement = container.current;
    const elements = carouselElement.querySelectorAll(".section");
    elements[index].scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!container || !container.current) return;
    const carouselElement = container.current;
    var elements = carouselElement.querySelectorAll(".section");

    var observer = new IntersectionObserver(
      function (entries) {
        var activated = entries.reduce(function (max, entry) {
          return entry.intersectionRatio > max.intersectionRatio ? entry : max;
        });
        if (activated.intersectionRatio > 0) {
          setActiveElementIndex(
            elementIndices[activated.target.getAttribute("id")]
          );
        }
      },
      {
        root: carouselElement,
        threshold: 0.5,
      }
    );
    var elementIndices = {};
    for (var i = 0; i < elements.length; i++) {
      elementIndices[elements[i].getAttribute("id")] = i;
      observer.observe(elements[i]);
    }
  }, [container,isMobileOrTablet]);

  return { handleIndicatorClick, activeElementIndex, container, indicator };
};
