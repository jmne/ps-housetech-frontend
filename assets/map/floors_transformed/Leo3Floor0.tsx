import { useMapElements } from "context/MapElements";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import * as React from "react";
import type { SVGProps } from "react";
import { COLOR } from "utils/constants";
const SvgLeo3Floor0 = React.memo((props: SVGProps<SVGSVGElement>) => {
  const mapElements = useMapElements();
  const router = useRouter();
  const { t } = useTranslation("index");
  const library_position =
    router.locale === "en" ? "translate(5 13)" : "translate(-1 13)";
  const janitor_position =
    router.locale === "en" ? "translate(548 145.7)" : "translate(538 145.7)";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2
      }}
      width="100%"
      height="100%"
      viewBox="0 0 615 447"
      ref={mapElements.leo3_elements[0]}
      {...props}
    >
      <path
        d="M596.3 148 537 191l-24.8-18-278 197 24.7 17.8-58.5 41.4-182-128.8 59.7-43 67 48.3L246.9 233l-43.1-31 72.2-52 43.6 31.5L423 108.8l-66.8-48.3 60.3-42.1L596.3 148Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".8px"
        }}
      />
      <path
        d="m228.4 219.8 18.5 13.3-19.3 13.8-10.5-7.7V228l11.3-8Z"
        style={{
          fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".8px"
        }}
      />
      <path
        d="m338.9 168-19 13.8-18.7-13.5 12.3-8.7h13.7L339 168Z"
        style={{
          fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".8px"
        }}
      />
      <g id="leo3-002">
        <path
          d="m494.9 160.7 42 30.3 30-21.4-41.8-30-30.2 21.1Z"
          style={{
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10
          }}
          transform="translate(522.6 168.6)"
        >
          {"002"}
        </text>
      </g>
      <g id="leo3-022">
        <path
          d="M281.5 336.5 214 287.9l-47.2 33.4 67.4 48.6 47.3-33.4Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
          transform="translate(1.8 1.3)"
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(217.6 334.4)"
        >
          {"022"}
        </text>
      </g>
      <g id="leo3-020">
        <path
          d="m281.5 336.5 48-34-67.9-49-47.6 34.4 67.5 48.6Z"
          style={{
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
          transform="translate(1.8 1.3)"
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10
          }}
          transform="translate(265.3 300)"
        >
          {"020"}
        </text>
      </g>
      <g id="leo3-019">
        <path
          d="m329.5 302.4 42.3-30-66.7-49-43.5 30 68 49Z"
          style={{
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
          transform="translate(1.8 1.3)"
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10
          }}
          transform="translate(310.2 268.5)"
        >
          {"019"}
        </text>
      </g>
      <g id="leo3-hausmeister">
        <path
          d="m567 169.6 29.3-21.5-41.3-29.9-29.8 21.2 41.8 30.2Z"
          style={{
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 8
          }}
          transform={janitor_position}
        >
          {t("wayfinder.map.janitor")}
        </text>
      </g>
      <g id="leo3-wc0">
        <path
          d="m511.5 149 43.5-30.8-17.8-12.7-43.5 30.8 17.8 12.8Z"
          style={{
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 8
          }}
          transform="translate(517.8 130.1)"
        >
          {"WC"}
        </text>
      </g>
      <g id="leo3-wc01">
        <path
          d="m537.2 105.5-10.8-7.8-43.5 30.7 10.8 7.9 43.5-30.8Z"
          style={{
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: "14.759px"
          }}
          transform="matrix(.542 0 0 .542 503.5 120)"
        >
          {"WC"}
        </text>
      </g>
      <g id="leo3-008">
        <path
          d="M483 66.3 450.4 43l-43.7 31 32.8 23.3 43.3-30.9Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(436.6 74.3)"
        >
          {"008"}
        </text>
      </g>
      <g id="leo3-009">
        <path
          d="m450.5 42.9-34-24.5L373 49.2l33.8 24.6L450.5 43Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(403.4 50.3)"
        >
          {"009"}
        </text>
      </g>
      <g id="leo3-010">
        <path
          d="m406.8 73.8-16.4 11.6-34.2-24.9L373 49.1l33.8 24.7Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(373.2 70)"
        >
          {"010"}
        </text>
      </g>
      <g id="leo3-017">
        <path
          d="m282.8 207.8 37.1-26-44-31.7-36.7 26.5 43.6 31.2Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(271.2 182.5)"
        >
          {"017"}
        </text>
      </g>
      <g id="leo3-018">
        <path
          d="M282.8 207.8 247 233.1 203.8 202l35.5-25.4 43.6 31.2Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(235 208.4)"
        >
          {"018"}
        </text>
      </g>
      <g id="leo3-034">
        <path
          d="M112.4 282.3 94.7 295l-34.4-24.8 17.8-12.7 34.3 25Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(78 280)"
        >
          {"034"}
        </text>
      </g>
      <g id="leo3-033">
        <path
          d="m60.3 270.1-42 30.3 34.4 24.3 42-29.8-34.4-24.8Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(48.2 301.7)"
        >
          {"033"}
        </text>
      </g>
      <g id="leo3-032">
        <path
          d="m52.7 324.7 32.7 23.1 41.8-29.5-32.5-23.4-42 29.8Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(81.7 325.6)"
        >
          {"032"}
        </text>
      </g>
      <g id="leo3-023">
        <path
          d="m234.2 370-30 21.2 24.7 17.8 30-21.3-24.7-17.8Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(223.2 393.5)"
        >
          {"023"}
        </text>
      </g>
      <g id="leo3-024">
        <path
          d="m228.9 409-42-30.2-28.8 20.5 42.3 30 28.5-20.3Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(185.2 408)"
        >
          {"024"}
        </text>
      </g>
      <g id="leo3-027">
        <path
          d="m158.1 399.3 41-29-17.8-12.7-41 29 17.8 12.7Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(161.3 383.5)"
        >
          {"027"}
        </text>
      </g>
      <g id="leo3-wc02">
        <path
          d="m181.3 357.6-10.7-8-41.2 29.4 10.8 7.7 41.1-29.1Z"
          style={{
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 8
          }}
          transform="translate(148.8 370)"
        >
          {"WC"}
        </text>
      </g>
      <g id="leo3-029">
        <path
          d="M170.6 349.6 149 334l-41.5 29.5 22 15.5 41.1-29.4Z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
        />
        <text
          style={{
            fontFamily: "&quot",
            fontSize: 10,
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(130.8 358.6)"
        >
          {"029"}
        </text>
      </g>
      <path
        id="leo3-az"
        d="m482.9 128.4 13.8-9.6-22-15.7-13.3 9.7 21.5 15.6Z"
        style={{
          fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".8px"
        }}
      />
      <g id="leo3-013">
        <path
          d="m371.7 272.5 44.5-31.7 48.3-34L512 173l-67.5-48.7-48 33.7-47.8 34-43.8 31.5 66.8 49Z"
          style={{
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".8px"
          }}
          transform="translate(1.5 1.5)"
        />
        <g
          style={{
            fontFamily: "&quot",
            fontSize: 10
          }}
          transform="translate(388.9 196)"
        >
          <text>{"013 - 015\n"}</text>
          <text transform={library_position}>{t("wayfinder.map.library")}</text>
        </g>
      </g>
    </svg>
  );
});
export default SvgLeo3Floor0;
