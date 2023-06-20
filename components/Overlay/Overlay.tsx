import indexStyles from "@/pages/index.module.scss";

export function Overlay() {

  return (
    <section
      className={[indexStyles.contentSection, indexStyles.weatherContainer].join(" ")}
    >
      <span className={indexStyles.wrapper}>
        I wonder what happens if you click the input ;)
      </span>
    </section>
  );
}
