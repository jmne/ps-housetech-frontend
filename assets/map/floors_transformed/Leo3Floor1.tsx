import { useMapElements } from "context/MapElements";
import * as React from "react";
import type { SVGProps } from "react";
import { COLOR } from "utils/constants";
const SvgLeo3Floor1 = React.memo((props: SVGProps<SVGSVGElement>) => {
  const mapElements = useMapElements();
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
      {...props}
      ref={mapElements.leo3_elements[1]}
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
        id="polygon7"
        d="m228.4 219.8 18.5 13.3-19.3 13.8-10.5-7.7V228l11.3-8Z"
        style={{
          fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".8px"
        }}
      />
      <g id="leo3-122">
        <path
          d="M281.5 336.5 214 287.9l-47.2 33.4 67.4 48.6 47.3-33.4Z"
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
          transform="translate(215.5 332.5)"
        >
          {"122"}
        </text>
      </g>
      <g id="leo3-120">
        <path
          d="m281.5 336.5 48-34-67.9-49-47.6 34.4 67.5 48.6Z"
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
          transform="translate(263.1 298.5)"
        >
          {"120"}
        </text>
      </g>
      <g id="leo3-119">
        <path
          d="m329.5 302.4 42.3-30-66.7-49-43.5 30 68 49Z"
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
          transform="translate(308.4 266.5)"
        >
          {"1"}
          <tspan x="4.819px 10.381px" y="0px 0px">
            {"19"}
          </tspan>
        </text>
      </g>
      <g id="leo3-115">
        <path
          d="m371.8 272.5-66.7-49 43.8-31.4 67.4 48.6-44.5 31.8Z"
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
          transform="translate(352.4 235.8)"
        >
          {"1"}
          <tspan x="4.819px 10.381px" y="0px 0px">
            {"15"}
          </tspan>
        </text>
      </g>
      <g id="leo3-114">
        <path
          d="m348.9 192 47.8-34 68 48.7-48.4 34-67.4-48.6Z"
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
          transform="translate(398.5 203)"
        >
          {"1"}
          <tspan x="4.819px 10.381px" y="0px 0px">
            {"14"}
          </tspan>
        </text>
      </g>
      <g id="leo3-113">
        <path
          d="m464.7 206.7 47.5-33.7-67.5-48.7-48 33.8 68 48.6Z"
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
          transform="translate(446.2 169)"
        >
          {"1"}
          <tspan x="4.819px 10.381px" y="0px 0px">
            {"13"}
          </tspan>
        </text>
      </g>
      <g id="leo3-101">
        <path
          d="m567 169.6 29.3-21.5-41.3-29.9-29.8 21.2 41.8 30.2Z"
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
          transform="translate(552.8 147.4)"
        >
          {"101"}
        </text>
      </g>
      <g id="leo3-wc1">
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
      <g id="leo3-wc11">
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
            fontSize: 8
          }}
          transform="translate(503.5 119.9)"
        >
          {"WC"}
        </text>
      </g>
      <g id="leo3-108">
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
          transform="translate(436.2 73.6)"
        >
          {"108"}
        </text>
      </g>
      <g id="leo3-109">
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
          transform="translate(403 49.6)"
        >
          {"109"}
        </text>
      </g>
      <g id="leo3-110">
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
          transform="translate(373.2 70.8)"
        >
          {"1"}
          <tspan x="4.819px 10.381px" y="0px 0px">
            {"10"}
          </tspan>
        </text>
      </g>
      <g id="leo3-117">
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
          transform="translate(271.2 182.6)"
        >
          {"1"}
          <tspan x="4.819px 10.381px" y="0px 0px">
            {"17"}
          </tspan>
        </text>
      </g>
      <g id="leo3-118">
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
          {"1"}
          <tspan x="4.819px 10.381px" y="0px 0px">
            {"18"}
          </tspan>
        </text>
      </g>
      <g id="leo3-134">
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
          transform="translate(77.7 279.7)"
        >
          {"134"}
        </text>
      </g>
      <g id="leo3-133">
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
          transform="translate(47.9 301)"
        >
          {"133"}
        </text>
      </g>
      <g id="leo3-132">
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
          transform="translate(81.4 324.9)"
        >
          {"132"}
        </text>
      </g>
      <g id="leo3-123">
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
          transform="translate(222.9 393)"
        >
          {"123"}
        </text>
      </g>
      <g id="leo3-124">
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
          transform="translate(184.8 407.6)"
        >
          {"124"}
        </text>
      </g>
      <g id="leo3-127">
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
          transform="translate(161 382)"
        >
          {"127"}
        </text>
      </g>
      <g id="leo3-wc12">
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
          transform="translate(148.8 371)"
        >
          {"WC"}
        </text>
      </g>
      <g id="leo3-129">
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
          transform="translate(130.4 360)"
        >
          {"129"}
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
      <g id="leo3-102">
        <path
          d="m542.2 151.7 24.8 17.9-30 21.3-24.8-17.9 30-21.3Z"
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
          transform="translate(531 174.9)"
        >
          {"102"}
        </text>
      </g>
      <path
        id="polygon327"
        d="m509.6 109.6 16.9-12-21.7-15.5-17 12 21.8 15.5Z"
        style={{
          fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".8px"
        }}
      />
      <path
        id="polygon331"
        d="m338.9 168-19 13.8-18.7-13.5 12.3-8.7h13.7L339 168Z"
        style={{
          fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".8px"
        }}
      />
      <g transform="matrix(.09 0 0 .09 132 235.1)">
        <path
          id="path4540"
          d="M0 118.5h212.3v212.4H0z"
          style={{
            fill: "#009262"
          }}
          transform="translate(5.3 -108.5)"
        />
        <path
          id="path4545"
          d="M55.5 275.3v55.5h56v-55.5H167v-56h-55.5v-55.5h-56v55.6H0v55.9h55.5Z"
          style={{
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS
          }}
          transform="translate(28 -131.1)"
        />
        <path
          id="rect4552"
          d="M0 236.2h208.1v94.7H0z"
          style={{
            fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
            stroke: "#009262",
            strokeWidth: "4.5px",
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 3
          }}
          transform="translate(7.2)"
        />
        <text
          id="text4554"
          style={{
            fontFamily: "&quot",
            fontSize: 36
          }}
          transform="translate(34.2 294.3)"
        >
          {"Ersthelfer"}
        </text>
      </g>
      <path
        id="path4324"
        d="m362.6 91.4 19.8-.5"
        style={{
          fill: "none",
          stroke: "#828282",
          strokeWidth: ".61px",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4
        }}
        transform="matrix(1.585 -1.08 -1.08 2.99 -377.2 390)"
      />
    </svg>
  );
});
export default SvgLeo3Floor1;
