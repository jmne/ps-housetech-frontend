interface styleProps {
  [key: string]: string;
}

export function transitionStyle(
  elem: HTMLElement | SVGSVGElement,
  styleProps: styleProps
) {
  return new Promise((resolve) => {
    function handleTransitionEnd() {
      resolve(elem);
    }
    elem.addEventListener("transitionend", handleTransitionEnd, { once: true });
    requestAnimationFrame(() => {
      Object.entries(styleProps).forEach(([prop, value]) => {
        elem.style.setProperty(prop, value);
      });
    });
  });
}

export function transitionClass(elem: HTMLElement | SVGSVGElement, className: string) {
  return new Promise((resolve) => {
    function handleTransitionEnd() {
      resolve(elem);
    }
    elem.addEventListener("transitionend", handleTransitionEnd, { once: true });
    requestAnimationFrame(() => {
      elem.classList.value = className;
    });
  });
}

export function transitionFunction(
  elem: HTMLElement | SVGSVGElement | Element,
  transformation: () => void
) {
  return new Promise((resolve) => {
    function handleTransitionEnd() {
      resolve(elem);
    }

    elem.addEventListener("transitionend", handleTransitionEnd, { once: true });
    requestAnimationFrame(transformation);
  });
}
