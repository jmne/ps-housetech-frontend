import { useSearchInputContext } from "context/SearchInputContext";

import indexStyles from "@/pages/index.module.scss";
import Keyboard from "@/components/Keyboard/Keyboard";


export function Overlay() {
  const searchInputContext = useSearchInputContext();

  return (
    <section
      className={[indexStyles.contentSection, indexStyles.overlayContainer].join(" ")}
    >
      <span className={indexStyles.wrapper}>
        I wonder what happens if you click the input ;)
      </span>
      <Keyboard visible={searchInputContext.active}/>
    </section>
  );
}
