type singleElement = HTMLElement | SVGSVGElement | Element;
type multipleElements = singleElement[];

function transitionHelper(
  elem: HTMLElement | SVGSVGElement | Element,
  action: () => void
): Promise<typeof elem> {
  return new Promise((resolve) => {
    function handleTransitionEnd() {
      resolve(elem);
    }

    elem.addEventListener("transitionend", handleTransitionEnd, { once: true });
    setTimeout(() => {
      handleTransitionEnd();
    }, 1000);
    requestAnimationFrame(action);
  });
}

function transitionHelperArray(elem: multipleElements, action: () => void) {
  return new Promise((resolve) => {
    function handleTransitionEnd() {
      resolve(elem);
    }

    elem.forEach((e) =>
      e.addEventListener("transitionend", handleTransitionEnd, { once: true })
    );
    setTimeout(() => {
      handleTransitionEnd();
    }, 1000);
    requestAnimationFrame(action);
  });
}

export function transitionStyle(
  elem: HTMLElement | SVGSVGElement,
  styleProps: Record<string, string>
) {
  return transitionHelper(elem, () => {
    Object.entries(styleProps).forEach(([prop, value]) => {
      elem.style.setProperty(prop, value);
    });
  });
}

export function transitionClass(elem: HTMLElement | SVGSVGElement, className: string) {
  return transitionHelper(elem, () => {
    elem.classList.value = className;
  });
}

export function transitionFunction(
  elem: singleElement | multipleElements,
  transformation: () => void
) {
  if (Array.isArray(elem)) {
    return transitionHelperArray(elem, transformation);
  }
  return transitionHelper(elem, transformation);
}

export const executeAnimationSequence = async (
  animations: (() => Promise<unknown>)[]
): Promise<unknown[]> => {
  for (let animation of animations) {
    await animation();
  }
  return animations;
};
