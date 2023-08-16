import * as React from "react";
import type { SVGProps } from "react";
import { useMapElements } from "context/MapElements";
import { COLOR } from "utils/constants";
import { Endcard } from "./egg_endcard";
import { useRouter } from "next/router";

const SvgLeonardocampus = (props: SVGProps<SVGSVGElement>) => {
  const mapElements = useMapElements();
  const router = useRouter();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      ref={mapElements.campus_element}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 3
      }}
      viewBox="0 0 1030 1115"
      {...props}
    >
      <defs>
        <path
          id="rect1203"
          d="M0 1029h170.1v85H0z"
          style={{
            fill: COLOR.MARKED_AREA,
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".75px",
            strokeMiterlimit: 1
          }}
        />
        <path
          id="path12302"
          d="m300.6 869.5-129.2 218.2"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".75px"
          }}
        />
      </defs>
      <path
        d="m365.1 177.3-84.4 90.5-169 143-87.9 21.6 15 151.8L47 841.7 0 1088.8l451.8 25.2 195-14.8 19.5-37.1 43.4-82.7L815 776.8 706.9 662l79.4-79.4-8.3-7-412.9-398.2Z"
        style={{
          fill: "#f2f2f2",
          fillRule: "nonzero",
          stroke: "#bfbfbf",
          strokeWidth: ".75px"
        }}
        transform="translate(83.9 -18.8)"
      />
      <path
        d="M0 992.4 130 1114l44.4-47.3L44.4 945 0 992.4Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(320.2 -634.4)"
      />
      <path
        d="M0 926.7 198.2 1114l52.7-61-38-35 68-68.8 37.2 35.6 29.3-29.3-191.8-186-66.8 66.8-15 13.3L0 926.7Z"
        style={{
          fill: COLOR.GREEN_AREA,
          fillRule: "nonzero"
        }}
        transform="translate(171.6 -382.5)"
      />
      <path
        d="m0 1114 33-184.7-9-284.6 4.2 22.6 9.1 20.7 42.2 39L43 768v4.2l28 28.4 65.2 59.8-61.3 68.3 48.2 48.8 77.1 64.3 1.3 13.8-128-1.3-37.7 5.6-20.4 28.4-12.6 25.2-2.8.5Z"
        style={{
          fill: COLOR.GREEN_AREA,
          fillRule: "nonzero"
        }}
        transform="translate(97.9 -106.4)"
      />
      <path
        d="m0 1091 1.4 14.1 150.8 9-45.8-49-18.4 3.2-14.4-1.6-10.4-8-12.9-21.9L0 1091Z"
        style={{
          fill: COLOR.GREEN_AREA,
          fillRule: "nonzero"
        }}
        transform="translate(304.6 -155.8)"
      />
      <path
        d="m344.8 937.5-169 143-136 33.5H0v-17.6l46.8.2 125-31.4 163.8-139 83.7-88.7 10 9.5-84.5 90.5Z"
        style={{
          fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
          fillRule: "nonzero",
          stroke: "#595959",
          strokeWidth: ".75px"
        }}
        transform="translate(19.8 -688.5)"
      />
      <text
        style={{
          fontFamily: "&quot",
          fontSize: 12
        }}
        transform="rotate(-41 575.6 -181.6)"
      >
        {"Johann-Krane-W"}
        <tspan x="90.498px 97.172px" y="0px 0px">
          {"eg"}
        </tspan>
      </text>
      <path
        d="m47.5 1034 34.3 30.4 10.7-12.1 13 11.5L61 1114l-12.5-11 11.8-13.4-34.5-30.6-11.6 13L0 1059.5l42.8-48.3 14 12.4-9.3 10.6Z"
        id="campus-davinci"
        style={{
          fill: COLOR.MARKED_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="rotate(2.9 11348.3 10040)"
      />
      <path
        d="m0 1018.1 30.8 28.6 24.4-24.6 94.7 92 34.2-6.6-22-23 10.5-11.3-73.6-69-10.8 11.3-15.3-14.6 17.8-20.1-30.1-28.6L0 1018Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(533 -429.6)"
      />
      <path
        d="m0 1049.8.6-10 175.4-193 13-3.3 14 4.5 15.6 12.8 14.5 20.7 2.3 16.7-114 215.7L0 1049.8Z"
        style={{
          fill: COLOR.GREEN_AREA,
          fillRule: "nonzero"
        }}
        transform="translate(542.6 -132.1)"
      />
      <Endcard />
      <path
        d="m0 1100.3 24.7-26.5 19.4 17.9-11.8 12.8-4.6-4.3-13 13.8L0 1100.2Z"
        style={{
          fill: "#d8d8d8",
          fillRule: "nonzero",
          stroke: "#bfbfbf",
          strokeWidth: ".75px"
        }}
        transform="translate(832.9 -486.4)"
      />
      <path
        id="egg2"
        onClick={() => {
          router.push("/flappy");
        }}
        d="m0 1090.3 11.8-12.8 25.9 24.1-11.8 12.4L0 1090.3Z"
        style={{
          fill: "#d8d8d8",
          fillRule: "nonzero",
          stroke: "#bfbfbf",
          strokeWidth: ".75px"
        }}
        transform="translate(865.2 -472.2)"
      />
      <path
        d="M42.4 1100.2 29.6 1114 0 1086.7l12-13 6.3 5.8 23.6-25.6-11.4-10.5 15-16.3 33.2 30.7-17.3 18.8-7.3-6.8-20.5 22.2 8.8 8.2Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(762.3 -491.7)"
      />
      <path
        d="M20.8 1025.1 0 1068.4l95 45.6 20.8-43.3-95-45.6Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(523.2 -62)"
      />
      <path
        d="m13 1063.7-13 26.9 48 23.4 12.7-27.8-47.8-22.5Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(510.3 -57.3)"
      />
      <path
        d="M58.3 1087.3 58 1114l-58.1-.3.2-26.8 58 .4Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(363.5 -114.2)"
      />
      <path
        d="m83 1080-.8 34-82.2-1.7.7-34.1 82.3 1.7Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(228.5 -98.7)"
      />
      <path
        d="m230 1114 19.1-20.2-229-216.9L0 898.1l97.7 92.6-67.1 71.7L65 1095l68.4-72.3L230 1114Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(154.8 -237.1)"
      />
      <path
        d="M175.7 898.4 2 1080.2 0 1114l210-222-34.3 6.5Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(507.2 -214)"
      />
      <path
        d="M184.5 1080.2 20 921.2 0 941.6 182.4 1114l2.1-33.8Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(324.8 -214)"
      />
      <path
        d="m180.9 1114-53.7-51.3-11.2 11.6-5.7-5.5 11.2-11.5-61.9-59.1-10.5 10.7-4.2-4.1L55.4 994 0 941.2l39 3.2 159 151.8-17.1 17.8Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(132.5 -400.2)"
      />
      <path
        d="m0 1093.2 21.6 20.8 24.8-25.1-21.4-21.7-25 26Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(199 -621.8)"
      />
      <path
        id="egg1"
        d="M2.2 1083.9 0 1106.4l76.9 7.6 2.2-22.5-76.9-7.6Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(402.5 -30.6)"
      />
      <path
        id="egg3"
        d="m.7 1083.7-.7 28.7 66.1 1.6.2-8.1 24 .6.5-20.6-90-2.2Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(98 -45.4)"
      />
      <path
        d="m20.4 1019.3 104.4 94.7 98.8-108.8L116 907.5l-17.2 19 6.8 6.2-6.3 7-52-47.3L0 944.6l48.4 43.9-28 30.8Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(404.4 -304.4)"
      />
      <path
        d="m0 1091 22.6 23 66.8-66.8-23-22L0 1091Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(237.8 -660.3)"
      />
      <path
        d="m0 1111.2 34.4-36.8 2.7 2-34 37.6-3.1-2.8Z"
        style={{
          fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
          fillRule: "nonzero",
          stroke: "#bfbfbf",
          strokeWidth: ".75px"
        }}
        transform="translate(307.2 -379.7)"
      />
      <path
        d="M63.3 1045.8 2.8 1114l-2.8-2.8 60.8-67.7 2.5 2.3Z"
        style={{
          fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(448.3 -614)"
      />
      <path
        d="m20.2 1047.3 1.8 1.3 45.3 45.3-17.5 20.1L0 1065.8l20.2-18.5Z"
        style={{
          fill: "#d8d8d8",
          fillRule: "nonzero",
          stroke: "#bfbfbf",
          strokeWidth: ".75px"
        }}
        transform="translate(802 -424.1)"
      />
      <path
        d="m0 1093 24 21 26.9-30.7-24-21L0 1093.1Z"
        style={{
          fill: "#d8d8d8",
          fillRule: "nonzero",
          stroke: "#bfbfbf",
          strokeWidth: ".75px"
        }}
        transform="translate(859 -396)"
      />
      <path
        d="m88 983.3.9.9 19.8 19.8-21.4 23.8 20.4 18.2 9.4-10.5L140 1056l-5.7 6.3 16 14.4 5.1-5.7 20.2 18.1-7.8 8.7 18 16.2 36.8-40.8-20.9-18.7-5.7 6.4-57-51.1 6.7-7.4-19.7-17.6-13.7 15.2-18.7-18.5-2-2.3 13.5-14.5-23.8-22-3.2 3.5-26.5-24.5 3.6-3.9-19.6-18L0 938.2l14.7 14.1 11-11.4 12 10.9L27 962.4l18 17.4 9.4-10.2 13.2 12.2-10.7 11.5 11.8 10.8 19.2-20.8Z"
        style={{
          fill: COLOR.NORMAL_AREA,
          fillRule: "nonzero"
        }}
        transform="translate(579.6 -567.8)"
      />
      <path
        d="m88 983.3.9.9 19.8 19.8h0l-21.4 23.8 20.4 18.2 9.4-10.5L140 1056l-5.7 6.3 16 14.4 5.1-5.7 20.2 18.1-7.8 8.7 18 16.2 36.8-40.8-20.9-18.7-5.7 6.4-57-51.1 6.7-7.4-19.7-17.6-13.7 15.2-18.7-18.5-2-2.3 13.5-14.5-23.8-22-3.2 3.5-26.5-24.5 3.6-3.9-19.6-18L0 938.2l14.7 14.1 11-11.4 12 10.9L27 962.4l18 17.4 9.4-10.2 13.2 12.2-10.7 11.5 11.8 10.8 19.2-20.8"
        style={{
          fill: "none",
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(579.6 -567.8)"
      />
      <path
        d="m352.4 875.9 75.1 69.4-29.8 33.2-172.3-10.2-1.5-14.1 56.7-61 22.7 11.4h23.3l22-24.8 3.8-3.9ZM143 883.2l-43.8-41.8L162 771l-69.2-62.4-4.6 4.6 65.2 59.9-61.3 68.3 48.2 48.7 75.1 62.4 2 2 1.3 13.8-128-1.4-37.7 5.7-20.4 28.3-21.9 45.5L0 1107.2l6.5 1.5 9.7-58.4 98.6 6.5h31.8v-6.8h-31.8l-96.6-5.7 19.2-40 19-26.3 34-5.1 133.5 2 175.8 10.5 33.8-37.1 34.2 10.1 201.8 104 1.1-2-24.6 46.8 13 6.8 65.2-128.6-11.3-5.7-40.2 76.6-76-38.6 110-224.5 2-16.2-9.4-27-17.6-19.8-24-41 9.9-18 9.9-28.8-1.4-15.6-7.1-15-3.6-4.4 41.5-43.9-3-3-17.9 19-114.3-104.7 51.8-51 286.5 276 20.7-20.6-606-585.4-24.1 18.3 318.8 307.5-51.9 51.2-197.8-184.3 33.3-34.9-4.6-4.8-54.2 56.6-18.1-16.9-25.9-36-4.4 4.7L320 291l19 17.6-24 23.2-10.3-10.2-26.9-3.7-23.3 9.3-82.8 85.6-24.2-29.3-6.5 5.5 24.7 29.9-28.7 29.7-37 3.4-55 53.3-.5 38-3.4 14.1 4.2 22.6 9.1 20.8 292.3 270h0l-2.4 2.9-19.7 23.9h-21.3L282 886l-75.3-70.8-60 64.1-3.8 3.8ZM439.3 942l188.6-215.7 25.6-30.6 22.6 38.8 17.5 19.3 8.8 23.2-2.2 14.2-109.8 223.2-119.8-61.6-31.6-10.6.3-.2Zm203.9-351.3 20.1 24.2 6.2 12.7 1.7 13.9-9.3 26.4-2.3 4.3L519 526.6l26.8-26.4 97.4 90.4Zm19.6 13.5-15-18.3-97.2-90.3 17.8-17.5 114.8 104.5-20.4 21.6Zm-147.9-81.4L320.1 336.3 344 313l197.6 183.3-26.7 26.4ZM349.1 308.1l17.9-18.7 197 184.8-17.7 17.5L349.1 308ZM48.5 539.7v-32l54-52.2 30.7-3.1-84.7 87.3ZM432.3 940 59.8 597l-8.6-19.9-3.8-20.6 4.9-11.8 205.6-211.9 21.3-9 22.1 4 13.9 13.3 195.7 185.6L456 581l-48.9 49.5 3.8 4 49.4-49.9 54.8-54 142.4 145.7-5.4 10.2-219.8 253.4Zm-281.5-55.4 56.1-60.7 68.6 66-55.8 58.7-71.9-60.8 3-3.2Z"
        style={{
          fill: COLOR.TEXT_AND_BASIC_ELEMENTS,
          fillRule: "nonzero",
          stroke: COLOR.CONTRAST_STROKE,
          strokeWidth: ".75px"
        }}
        transform="translate(80.7 -19)"
      />
      <path
        d="M0 1085.7h175.7v28.3H0z"
        style={{
          fill: "none"
        }}
        transform="rotate(44 1280.2 1514.8)"
      />
      <text
        style={{
          fontFamily: "&quot",
          fontSize: 14
        }}
        transform="rotate(44 -104.6 1008.5)"
      >
        {"Steinfurter Stra\xDFe"}
      </text>
      <g id="campus-leo18-tag" transform="translate(-595 219.7)">
        <g id="shape1579-492" transform="translate(633 -617.5)">
          <use
            xlinkHref="#rect1203"
            style={{
              fill: COLOR.MARKED_AREA,
              stroke: COLOR.CONTRAST_STROKE,
              strokeWidth: ".75px",
              strokeMiterlimit: 1
            }}
            transform="matrix(1.14 0 0 .382 -6 661.8)"
          />
          <text
            style={{
              fontFamily: "&quot",
              fontSize: 18,
              fill: COLOR.TEXT_AND_BASIC_ELEMENTS
            }}
            transform="translate(6.7 1076.3)"
          >
            {"Leonardo-Campus 18"}
          </text>
        </g>
        <g id="shape1580-505" transform="matrix(.411 .455 -.742 .67 1352.5 -267)">
          <path
            id="path1230"
            d="M154.5 946.3 61.3 840.6"
            style={{
              fill: "none",
              fillRule: "nonzero",
              stroke: COLOR.CONTRAST_STROKE,
              strokeWidth: ".75px"
            }}
          />
        </g>
      </g>
      <g id="campus-leo18" transform="translate(131.5 -569.8)">
        <path
          id="path952"
          d="m0 1110.8 66.6-69.5 21.6 20.8-49.1 52-39.1-3.3Z"
          style={{
            fill: COLOR.MARKED_AREA,
            fillRule: "nonzero",
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".75px"
          }}
        />
      </g>
      <g id="campus-leo11-tag" transform="translate(153 410)">
        <g id="shape1579-4921" transform="translate(675 -471.5)">
          <use
            xlinkHref="#rect1203"
            id="rect12031"
            style={{
              fill: COLOR.MARKED_AREA,
              stroke: COLOR.CONTRAST_STROKE,
              strokeWidth: ".75px",
              strokeMiterlimit: 1
            }}
            transform="matrix(1.14 0 0 .382 -6 661.8)"
          />
          <text
            style={{
              fontFamily: "&quot",
              fontSize: 18,
              fill: COLOR.TEXT_AND_BASIC_ELEMENTS
            }}
            transform="translate(6.7 1076.3)"
          >
            {"Leonardo-Campus 11"}
          </text>
        </g>
        <g transform="matrix(.353 .479 -.479 .563 1076.1 -154.6)">
          <g id="shape1580-5051">
            <path
              id="path12301"
              d="M417.5 955.7 168 1081.2"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: COLOR.CONTRAST_STROKE,
                strokeWidth: ".75px"
              }}
            />
          </g>
        </g>
      </g>
      <g
        id="campus-leo11"
        transform="translate(695.6 -102.6)"
        ref={mapElements.leo11_building_on_campus}
      >
        <path
          id="path1042"
          d="m0 1093.6 14.6-28.4 16.8-32.7 37-71.9 39.8 20.5-68.4 133L0 1093.5Z"
          style={{
            fill: COLOR.MARKED_AREA,
            fillRule: "nonzero",
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".75px"
          }}
        />
      </g>
      <g transform="translate(146 330.3)">
        <g id="shape1579-4922" transform="translate(662 -989.6)">
          <use
            xlinkHref="#rect1203"
            id="rect12032"
            style={{
              fill: COLOR.MARKED_AREA,
              stroke: COLOR.CONTRAST_STROKE,
              strokeWidth: ".75px",
              strokeMiterlimit: 1
            }}
            transform="matrix(1.14 0 0 .382 -6 661.8)"
          />
          <text
            style={{
              fontFamily: "&quot",
              fontSize: 18,
              fill: COLOR.TEXT_AND_BASIC_ELEMENTS
            }}
            transform="translate(6.7 1076.3)"
          >
            {"Leonardo-Campus 10"}
          </text>
        </g>
        <use
          xlinkHref="#path12302"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".75px"
          }}
          transform="matrix(.526 .582 -.949 .857 1411.7 -822.2)"
        />
      </g>
      <g id="campus-leo10" transform="translate(532 -496.9)">
        <path
          id="path1133"
          d="m68.6 1102.4-13.4-13-24.4 24.6L0 1085.4l60.6-66 30 28.7-17.7 20 15.3 14.8-19.6 19.5Z"
          style={{
            fill: COLOR.MARKED_AREA,
            fillRule: "nonzero",
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".75px"
          }}
        />
      </g>
      <g id="campus-leo3-tag">
        <g id="shape1579-4923" transform="translate(600 -965.5)">
          <use
            xlinkHref="#rect1203"
            id="rect12033"
            style={{
              fill: COLOR.MARKED_AREA,
              stroke: COLOR.CONTRAST_STROKE,
              strokeWidth: ".75px",
              strokeMiterlimit: 1
            }}
            transform="matrix(1.07 0 0 .382 -6 661.8)"
          />
          <text
            style={{
              fontFamily: "&quot",
              fontSize: 18,
              fill: COLOR.TEXT_AND_BASIC_ELEMENTS
            }}
            transform="translate(6.9 1076.3)"
          >
            {"Leonardo-Campus 1"}
          </text>
        </g>
        <g id="shape1580-5053" transform="matrix(.411 .455 -.742 .67 1206.5 -597.3)">
          <use
            xlinkHref="#path12302"
            id="path12303"
            style={{
              fill: "none",
              fillRule: "nonzero",
              stroke: COLOR.CONTRAST_STROKE,
              strokeWidth: ".75px"
            }}
          />
        </g>
      </g>
      <g
        id="campus-leo3"
        transform="translate(459.2 -755.5)"
        ref={mapElements.leo3_building_on_campus}
      >
        <path
          id="path897"
          d="M50.7 1044.8 37.6 1033l-13 14.3L0 1025l41.9-46 26.2 24-3.3 3.6 45.8 41.7 4-4.4 26.2 23.7-42.3 46.5-20.8-18.8 11.8-13-16.5-15-11.7 13-23.4-21.3 12.8-14Z"
          style={{
            fill: COLOR.MARKED_AREA,
            fillRule: "nonzero",
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".75px"
          }}
        />
      </g>
      <g id="campus-leo1-tag" transform="translate(94 78)">
        <g id="shape1579-4924" transform="translate(600 -965.5)">
          <use
            xlinkHref="#rect1203"
            id="rect12034"
            style={{
              fill: COLOR.MARKED_AREA,
              stroke: COLOR.CONTRAST_STROKE,
              strokeWidth: ".75px",
              strokeMiterlimit: 1
            }}
            transform="matrix(1.07 0 0 .382 -6 661.8)"
          />
          <text
            style={{
              fontFamily: "&quot",
              fontSize: 18,
              fill: COLOR.TEXT_AND_BASIC_ELEMENTS
            }}
            transform="translate(6.9 1076.3)"
          >
            {"Leonardo-Campus 3"}
          </text>
        </g>
        <g id="shape1580-5054" transform="matrix(.411 .455 -.742 .67 1206.5 -597.3)">
          <use
            xlinkHref="#path12302"
            id="path12304"
            style={{
              fill: "none",
              fillRule: "nonzero",
              stroke: COLOR.CONTRAST_STROKE,
              strokeWidth: ".75px"
            }}
          />
        </g>
      </g>
      <g id="campus-leo1" transform="translate(425.9 -863.5)">
        <path
          id="path1123"
          d="m0 1092.4 36-40.1 24.1 21.6-20.1 22.8-16 17.3-24-21.6Z"
          style={{
            fill: COLOR.MARKED_AREA,
            fillRule: "nonzero",
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".75px"
          }}
        />
      </g>
    </svg>
  );
};

const SvgLeonardocampusMemo = React.memo(SvgLeonardocampus);

export default SvgLeonardocampusMemo;
