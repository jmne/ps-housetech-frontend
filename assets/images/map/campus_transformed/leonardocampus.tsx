import { useMapElements } from "context/MapElements";
import * as React from "react";
import type { SVGProps } from "react";
import { COLOR } from "utils/constants";
const LeonardoCampus = React.memo((props: SVGProps<SVGSVGElement>) => {
  const mapElements = useMapElements();
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1030 1115"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 3
      }}
      ref={mapElements.campus_element}
      {...props}
    >
      <g transform="matrix(1,0,0,1,1,0)">
        <g id="g3">
          <g id="shape6-5" transform="matrix(1,0,0,1,82.8891,-18.75)">
            <path
              id="path20"
              d="M365.11,177.291L280.671,267.781L111.61,410.761L23.85,432.421L38.78,584.162L47.08,841.682L0,1088.82L451.77,1114.04L646.86,1099.25L666.32,1062.06L709.72,979.391L814.99,776.832L706.88,661.912L786.3,582.502L778.039,575.511L365.11,177.291Z"
              style={{
                fill: "rgb(242,242,242)",
                fillRule: "nonzero",
                stroke: "rgb(191,191,191)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape367-7" transform="matrix(1,0,0,1,319.222,-634.394)">
            <path
              id="path25"
              d="M0,992.381L130.04,1114.04L174.38,1066.66L44.35,945.001L0,992.381Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape378-9" transform="matrix(1,0,0,1,170.569,-382.514)">
            <path
              id="path30"
              d="M0,926.721L198.22,1114.04L250.85,1052.94L212.84,1018.07L280.98,949.181L318.13,984.82L347.41,955.502L155.609,769.502L88.809,836.302L73.859,849.632L0,926.721Z"
              style={{
                fill: COLOR.GREEN_AREA,
                fillRule: "nonzero"
              }}
            />
          </g>
          <g id="egg4" transform="matrix(1,0,0,1,252.834,-535.362)">
            <path
              id="path35"
              d="M54.25,1101L50.82,1108.08L43.72,1113.57L30.89,1114.04L13.95,1105.8L6.14,1096.5L0,1085.89L6.4,1073.53L13.27,1069.87L32.95,1089.55L49.889,1095.25L54.25,1101Z"
              style={{
                fill: "rgb(150,175,207)",
                fillRule: "nonzero"
              }}
            />
          </g>
          <g id="shape85-13" transform="matrix(1,0,0,1,96.9028,-106.379)">
            <path
              id="path40"
              d="M0,1114.04L33.06,929.311L23.89,644.662L28.13,667.282L37.22,688.032L79.37,726.971L43.06,768.002L43.06,772.221L70.95,800.573L136.2,860.432L74.92,928.692L123.11,977.452L200.21,1041.79L201.53,1055.61L73.5,1054.27L35.8,1059.94L15.39,1088.28L2.79,1113.52L0,1114.04Z"
              style={{
                fill: COLOR.GREEN_AREA,
                fillRule: "nonzero"
              }}
            />
          </g>
          <g id="shape32-15" transform="matrix(1,0,0,1,303.632,-155.806)">
            <path
              id="path45"
              d="M0,1090.94L1.42,1105.11L152.21,1114.04L106.41,1065.06L88.02,1068.26L73.629,1066.65L63.23,1058.67L50.33,1036.83L0,1090.94Z"
              style={{
                fill: COLOR.GREEN_AREA,
                fillRule: "nonzero"
              }}
            />
          </g>
          <g id="campus-street-JohannKraneWeg" transform="matrix(1,0,0,1,18.75,-688.486)">
            <path
              id="path52"
              d="M344.81,937.521L175.75,1080.5L39.84,1114.04L0,1114.04L0,1096.37L46.81,1096.62L171.78,1065.19L335.62,926.291L419.33,837.461L429.24,847.031L344.81,937.521Z"
              style={{
                fill: COLOR.NON_MARKED_AREA_BUT_RELEVANT,
                fillRule: "nonzero",
                stroke: "rgb(89,89,89)",
                strokeWidth: "0.75px"
              }}
            />
            <g id="text54" transform="matrix(0.7547,-0.6561,0.6561,0.7547,240.6,1021.58)">
              <g>
                <text
                  x="0px"
                  y="0px"
                  style={{
                    fontFamily: "'Helvetica'",
                    fontSize: 12
                  }}
                >
                  {"Johann-Krane-W"}
                </text>
                <g transform="matrix(1,0,0,1,90.499,0)">
                  <text
                    x="0px"
                    y="0px"
                    style={{
                      fontFamily: "'Helvetica'",
                      fontSize: 12
                    }}
                  >
                    {"eg"}
                  </text>
                </g>
              </g>
            </g>
          </g>
          <g
            id="shape368-22"
            transform="matrix(0.998719,0.0505929,-0.0505929,0.998719,521.492,-561.276)"
          >
            <path
              id="path64"
              d="M47.51,1034.07L81.751,1064.41L92.491,1052.28L105.541,1063.82L61.021,1114.04L48.451,1102.88L60.311,1089.48L25.802,1058.92L14.221,1071.98L0,1059.37L42.769,1011.11L56.799,1023.55L47.51,1034.07Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape369-24" transform="matrix(1,0,0,1,531.999,-429.585)">
            <path
              id="path69"
              d="M0,1018.1L30.84,1046.74L55.24,1022.09L149.86,1114.04L184.139,1107.54L162.119,1084.43L172.569,1073.23L99.029,1004.26L88.169,1015.55L72.899,1000.89L90.669,980.802L60.569,952.162L0,1018.1Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape15-26" transform="matrix(1,0,0,1,864.182,-472.21)">
            <path
              id="path74"
              d="M37.67,1101.62L11.771,1077.45L0,1090.28L25.9,1114.04L37.67,1101.62Z"
              style={{
                fill: COLOR.NON_MARKED_AREA_BUT_RELEVANT,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape20-40" transform="matrix(1,0,0,1,541.561,-132.14)">
            <path
              id="path109"
              d="M0,1049.76L0.551,1039.73L176.03,846.941L189.04,843.562L202.86,848.052L218.5,860.892L233.04,881.572L235.27,898.332L121.27,1114.04L0,1049.76Z"
              style={{
                fill: COLOR.GREEN_AREA,
                fillRule: "nonzero"
              }}
            />
          </g>
          <g id="shape149-77" transform="matrix(1,0,0,1,403.389,-304.39)">
            <path
              id="path200"
              d="M0,944.562L47.32,892.421L82.21,924.11L99.32,939.641L105.62,932.69L98.801,926.52L116.04,907.541L223.591,1005.22L124.78,1114.04L20.41,1019.28L48.37,988.471L31.82,973.41L0,944.562Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape153-81" transform="matrix(1,0,0,1,153.803,-237.112)">
            <path
              id="path210"
              d="M0,898.102L20.05,876.932L249.13,1093.76L229.931,1114.04L133.421,1022.68L64.99,1095L30.56,1062.4L97.74,990.67L0,898.102Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape159-85" transform="matrix(1,0,0,1,459.19,-755.487)">
            <path
              id="path220"
              d="M0,1024.88L41.859,978.881L68.149,1002.81L64.819,1006.49L110.63,1048.19L114.659,1043.76L140.8,1067.53L98.48,1114.04L77.72,1095.16L89.47,1082.23L73.01,1067.29L61.27,1080.18L37.87,1058.91L50.69,1044.84L37.59,1032.94L24.569,1047.24L0,1024.88Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape163-89" transform="matrix(1,0,0,1,323.792,-213.905)">
            <path
              id="path230"
              d="M0,941.571L19.94,921.221L184.509,1080.22L182.389,1114.04L0,941.571Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape165-93" transform="matrix(1,0,0,1,131.506,-400.218)">
            <path
              id="path240"
              d="M0,941.161L39.06,944.421L197.94,1096.23L180.9,1114.04L127.18,1062.71L116.05,1074.33L110.34,1068.85L121.5,1057.25L59.62,998.171L49.15,1008.92L44.88,1004.78L55.38,994.042L0,941.161Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape167-97" transform="matrix(1,0,0,1,506.182,-213.905)">
            <path
              id="path250"
              d="M0,1114.04L2.12,1080.22L175.68,898.362L209.959,891.862L0,1114.04Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape186-109" transform="matrix(1,0,0,1,253.353,-210.089)">
            <path
              id="path280"
              d="M0,1077.91L37.52,1038.96L75.05,1075.06L37.52,1114.04L0,1077.91Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape188-113" transform="matrix(1,0,0,1,227.471,-98.7412)">
            <path
              id="path290"
              d="M0,1112.3L0.73,1078.17L82.95,1079.94L82.221,1114.04L0,1112.3Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape190-117" transform="matrix(1,0,0,1,131.506,-569.831)">
            <path
              id="path300"
              d="M0,1110.77L66.57,1041.3L88.2,1062.1L39.06,1114.04L0,1110.77Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape192-121" transform="matrix(1,0,0,1,761.299,-491.71)">
            <path
              id="path310"
              d="M0,1086.73L12.021,1073.69L18.321,1079.5L41.901,1053.92L30.461,1043.37L45.482,1027.12L78.732,1057.77L61.412,1076.55L54.102,1069.8L33.572,1092.04L42.392,1100.17L29.612,1114.04L0,1086.73Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape194-125" transform="matrix(1,0,0,1,97.0806,-45.4326)">
            <path
              id="path320"
              d="M0,1112.39L0.72,1083.67L90.82,1085.94L90.3,1106.51L66.31,1105.9L66.1,1114.04L0,1112.39Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape204-135" transform="matrix(1,0,0,1,401.463,-30.5537)">
            <path
              id="path345"
              d="M0,1106.43L2.23,1083.88L79.1,1091.51L76.86,1114.04L0,1106.43Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape208-141" transform="matrix(1,0,0,1,509.26,-57.335)">
            <path
              id="path360"
              d="M0,1090.56L12.931,1063.73L60.741,1086.19L47.911,1114.04L0,1090.56Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape210-145" transform="matrix(1,0,0,1,362.467,-114.183)">
            <path
              id="path370"
              d="M0,1113.65L0.19,1086.88L58.25,1087.3L58.061,1114.04L0,1113.65Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape212-149" transform="matrix(1,0,0,1,857.983,-395.909)">
            <path
              id="path380"
              d="M0,1093.06L26.85,1062.3L50.86,1083.28L24.02,1114.04L0,1093.06Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape216-153" transform="matrix(1,0,0,1,198.077,-621.765)">
            <path
              id="path390"
              d="M0,1093.23L25,1067.21L46.35,1088.88L21.63,1114.04L0,1093.23Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(51,0,102)",
                strokeWidth: "0.2px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter"
              }}
            />
          </g>
          <g id="shape220-159" transform="matrix(1,0,0,1,831.87,-486.417)">
            <path
              id="path405"
              d="M0,1100.25L24.72,1073.77L44.09,1091.66L32.31,1104.49L27.71,1100.17L14.77,1114.04L0,1100.25Z"
              style={{
                fill: "rgb(216,216,216)",
                fillRule: "nonzero",
                stroke: "rgb(191,191,191)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="egg2" transform="matrix(1,0,0,1,864.182,-472.21)">
            <path
              id="path415"
              d="M0,1090.28L11.771,1077.45L37.67,1101.62L25.9,1114.04L0,1090.28Z"
              style={{
                fill: "rgb(216,216,216)",
                fillRule: "nonzero",
                stroke: "rgb(191,191,191)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape360-359" transform="matrix(1,0,0,1,761.299,-491.71)">
            <path
              id="path902"
              d="M42.39,1100.17L29.61,1114.04L0,1086.73L12.021,1073.69L18.321,1079.5L41.901,1053.92L30.461,1043.37L45.482,1027.12L78.732,1057.77L61.412,1076.55L54.102,1069.8L33.572,1092.04L42.39,1100.17Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape359-361" transform="matrix(1,0,0,1,522.186,-62.0108)">
            <path
              id="path907"
              d="M20.79,1025.11L0,1068.4L95.021,1114.04L115.821,1070.75L20.79,1025.11Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape361-363" transform="matrix(1,0,0,1,509.26,-57.335)">
            <path
              id="path912"
              d="M12.93,1063.73L0,1090.56L47.91,1114.04L60.74,1086.19L12.93,1063.73Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape363-367" transform="matrix(1,0,0,1,362.467,-114.183)">
            <path
              id="path922"
              d="M58.25,1087.3L58.061,1114.04L0,1113.65L0.19,1086.88L58.25,1087.3Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape364-369" transform="matrix(1,0,0,1,227.471,-98.7412)">
            <path
              id="path927"
              d="M82.95,1079.94L82.221,1114.04L0,1112.3L0.73,1078.17L82.95,1079.94Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape366-371" transform="matrix(1,0,0,1,153.803,-237.112)">
            <path
              id="path932"
              d="M229.93,1114.04L249.129,1093.76L20.05,876.931L0,898.101L97.74,990.669L30.56,1062.4L64.99,1095L133.42,1022.68L229.93,1114.04Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape370-373" transform="matrix(1,0,0,1,506.182,-213.905)">
            <path
              id="path937"
              d="M175.68,898.361L2.12,1080.22L0,1114.04L209.96,891.861L175.68,898.361Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape371-375" transform="matrix(1,0,0,1,323.792,-213.905)">
            <path
              id="path942"
              d="M184.51,1080.22L19.941,921.22L0,941.57L182.39,1114.04L184.51,1080.22Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape372-377" transform="matrix(1,0,0,1,131.506,-400.218)">
            <path
              id="path947"
              d="M180.9,1114.04L127.18,1062.71L116.05,1074.33L110.34,1068.85L121.5,1057.25L59.62,998.17L49.15,1008.92L44.88,1004.78L55.37,994.041L0,941.161L39.06,944.421L197.94,1096.23L180.9,1114.04Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape374-381" transform="matrix(1,0,0,1,198.077,-621.765)">
            <path
              id="path957"
              d="M0,1093.23L21.63,1114.04L46.35,1088.88L25,1067.21L0,1093.23Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="egg1" transform="matrix(1,0,0,1,401.463,-30.5537)">
            <path
              id="path962"
              d="M2.23,1083.88L0,1106.43L76.86,1114.04L79.1,1091.51L2.23,1083.88Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape376-385" transform="matrix(1,0,0,1,97.0806,-45.4326)">
            <path
              id="path967"
              d="M0.72,1083.67L0,1112.39L66.1,1114.04L66.31,1105.9L90.3,1106.51L90.82,1085.94L0.72,1083.67Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape377-387" transform="matrix(1,0,0,1,403.389,-304.39)">
            <path
              id="path972"
              d="M20.41,1019.28L124.78,1114.04L223.591,1005.22L116.04,907.542L98.8,926.52L105.619,932.69L99.319,939.641L47.319,892.42L0,944.561L48.37,988.471L20.41,1019.28Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape389-389" transform="matrix(1,0,0,1,236.776,-660.252)">
            <path
              id="path977"
              d="M0,1091.06L22.6,1114.04L89.41,1047.24L66.341,1025.19L0,1091.06Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape381-391" transform="matrix(1,0,0,1,306.227,-379.725)">
            <path
              id="path982"
              d="M0,1111.17L34.37,1074.43L37.141,1076.38L3.12,1114.04L0,1111.17Z"
              style={{
                fill: COLOR.NON_MARKED_AREA_BUT_RELEVANT,
                fillRule: "nonzero",
                stroke: "rgb(191,191,191)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape402-393" transform="matrix(1,0,0,1,447.348,-614.026)">
            <path
              id="path987"
              d="M63.27,1045.85L2.83,1114.04L0,1111.2L60.78,1043.49L63.27,1045.85Z"
              style={{
                fill: COLOR.NON_MARKED_AREA_BUT_RELEVANT,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape30-397" transform="matrix(1,0,0,1,800.938,-424.104)">
            <path
              id="path997"
              d="M20.17,1047.25L21.97,1048.56L67.32,1093.91L49.78,1114.04L0,1065.8L20.17,1047.25Z"
              style={{
                fill: "rgb(216,216,216)",
                fillRule: "nonzero",
                stroke: "rgb(191,191,191)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape13-399" transform="matrix(1,0,0,1,857.983,-395.909)">
            <path
              id="path1002"
              d="M0,1093.06L24.02,1114.04L50.86,1083.28L26.85,1062.3L0,1093.06Z"
              style={{
                fill: "rgb(216,216,216)",
                fillRule: "nonzero",
                stroke: "rgb(191,191,191)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape33-458" transform="matrix(1,0,0,1,578.565,-567.806)">
            <path
              id="path1116"
              d="M87.92,983.261L88.869,984.191L108.71,1004.03L108.71,1004.04L87.35,1027.8L107.65,1046.04L117.13,1035.47L139.989,1056.01L134.33,1062.31L150.319,1076.67L155.42,1071L175.6,1089.12L167.789,1097.81L185.869,1114.04L222.55,1073.25L201.739,1054.54L196.01,1060.93L139.08,1009.77L145.67,1002.44L126.01,984.77L112.289,1000.04L93.63,981.481L91.63,979.241L105.069,964.691L81.259,942.711L78.099,946.151L51.619,921.701L55.25,917.801L35.609,899.711L0,938.301L14.739,952.431L25.63,941.011L37.63,951.881L27.13,962.381L44.98,979.801L54.38,969.601L67.59,981.781L56.94,993.341L68.66,1004.12L87.92,983.261Z"
              style={{
                fill: COLOR.NORMAL_AREA,
                fillRule: "nonzero"
              }}
            />
            <path
              id="path1118"
              d="M87.92,983.261L88.869,984.191L108.71,1004.03L108.71,1004.04L87.35,1027.8L107.65,1046.04L117.13,1035.47L139.989,1056.01L134.33,1062.31L150.319,1076.67L155.42,1071L175.6,1089.12L167.789,1097.81L185.869,1114.04L222.55,1073.25L201.739,1054.54L196.01,1060.93L139.08,1009.77L145.67,1002.44L126.01,984.77L112.289,1000.04L93.63,981.481L91.63,979.241L105.069,964.691L81.259,942.711L78.099,946.151L51.619,921.701L55.25,917.801L35.609,899.711L0,938.301L14.739,952.431L25.63,941.011L37.63,951.881L27.13,962.381L44.98,979.801L54.38,969.601L67.59,981.781L56.94,993.341L68.66,1004.12L87.92,983.261"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape28-468" transform="matrix(1,0,0,1,79.6949,-19.0335)">
            <path
              id="path1138"
              d="M352.39,875.9L427.52,945.3L397.7,978.54L225.35,968.341L223.94,954.161L280.63,893.22L303.31,904.56L326.55,904.56L348.55,879.8L352.39,875.9ZM142.95,883.23L99.21,841.351L162,771.041L92.78,708.602L88.16,713.221L153.41,773.082L92.13,841.352L140.31,890.102L215.43,952.461L217.42,954.451L218.74,968.271L90.71,966.921L53.01,972.591L32.6,1000.94L10.72,1046.39L0,1107.23L6.52,1108.65L16.22,1050.32L114.8,1056.78L146.55,1056.78L146.55,1049.98L114.8,1049.98L18.16,1044.27L37.42,1004.34L56.41,977.98L90.43,972.871L223.94,974.861L399.69,985.351L433.51,948.281L467.72,958.422L669.51,1062.35L670.619,1060.33L646.019,1107.23L659.059,1114.04L724.249,985.351L712.908,979.681L672.738,1056.28L596.688,1017.66L706.678,793.162L708.657,777.002L699.307,750.07L681.727,730.23L657.767,689.271L667.557,671.271L677.477,642.351L676.057,626.761L668.977,611.74L665.367,607.361L706.888,563.501L703.958,560.57L686.008,579.591L571.72,474.801L623.54,423.721L909.92,699.9L930.569,679.252L324.569,93.851L300.469,112.161L619.319,419.651L567.449,470.881L369.6,286.631L402.91,251.721L398.27,246.921L344.13,303.481L325.98,286.611L300.15,250.611L295.74,255.331L320.03,290.861L339.001,308.461L315.03,331.711L304.72,321.471L277.8,317.791L254.55,327.141L171.65,412.671L147.52,383.381L141.03,388.871L165.72,418.781L136.96,448.451L100.06,451.86L45.07,505.161L44.5,543.14L41.1,557.31L45.34,579.931L54.43,600.681L346.68,870.63L346.71,870.65L346.68,870.63L344.26,873.581L324.57,897.47L303.31,897.47L282.05,886.13L206.65,815.271L146.79,879.4L142.95,883.23ZM439.25,941.99L627.87,726.261L653.45,695.7L676.06,734.479L693.64,753.75L702.43,777L700.159,791.17L590.42,1014.43L470.55,952.75L439.03,942.24L439.25,941.99ZM643.17,590.662L663.31,614.861L669.54,627.611L671.239,641.502L661.889,667.861L659.629,672.15L519.02,526.74L545.81,500.331L643.17,590.662ZM662.77,604.211L647.72,585.941L550.619,495.601L568.38,478.091L683.18,582.582L662.77,604.211ZM514.9,522.801L320.1,336.281L343.98,313.081L541.6,496.421L514.9,522.801ZM349.1,308.111L366.98,289.371L564.1,474.201L546.4,491.68L349.1,308.111ZM48.47,539.74L48.47,507.711L102.59,455.53L133.17,452.36L48.47,539.74ZM432.33,939.931L59.81,597.002L51.19,577.141L47.45,556.521L52.3,544.671L257.949,332.811L279.21,323.741L301.319,327.711L315.17,341.081L510.92,526.731L456.01,580.971L407.15,630.512L410.94,634.541L460.26,584.65L515.06,530.65L657.45,676.28L652.07,686.469L432.33,939.931ZM150.77,884.502L206.93,823.772L275.53,889.821L219.69,948.491L147.82,887.692L150.77,884.502Z"
              style={{
                fill: COLOR.NON_MARKED_AREA_BUT_RELEVANT,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="shape1-470" transform="matrix(1,0,0,1,521.898,-879.618)">
            <path
              id="path1145"
              d="M9.284,1095.47L30.119,1095.47C35.246,1095.47 39.402,1099.63 39.402,1104.76C39.402,1109.88 35.246,1114.04 30.119,1114.04L9.284,1114.04C4.157,1114.04 0.001,1109.88 0.001,1104.76C0,1099.63 4.157,1095.47 9.284,1095.47Z"
              style={{
                fill: "rgb(191,207,226)",
                fillRule: "nonzero",
                stroke: "rgb(234,239,245)",
                strokeWidth: "2.25px"
              }}
            />
            <g id="text1147" transform="matrix(1,0,0,1,8.8998,1108.35)">
              <text
                x="0px"
                y="0px"
                style={{
                  fontFamily: "'Helvetica'",
                  fontSize: 12
                }}
              >
                {"B 54"}
              </text>
            </g>
          </g>
          <g id="shape2-473" transform="matrix(1,0,0,1,832.008,-577.09)">
            <path
              id="path1154"
              d="M9.283,1095.47L30.118,1095.47C35.245,1095.47 39.401,1099.63 39.401,1104.75C39.401,1109.88 35.245,1114.04 30.118,1114.04L9.283,1114.04C4.156,1114.04 0,1109.88 0,1104.75C0,1099.63 4.156,1095.47 9.283,1095.47Z"
              style={{
                fill: "rgb(191,207,226)",
                fillRule: "nonzero",
                stroke: "rgb(234,239,245)",
                strokeWidth: "2.25px"
              }}
            />
            <g id="text1156" transform="matrix(1,0,0,1,8.9002,1108.35)">
              <text
                x="0px"
                y="0px"
                style={{
                  fontFamily: "'Helvetica'",
                  fontSize: 12
                }}
              >
                {"B 54"}
              </text>
            </g>
          </g>
          <g
            id="shape5-476"
            transform="matrix(0.71934,0.694658,-0.694658,0.71934,1410.58,-464.175)"
          >
            <rect
              id="rect1163"
              x={0}
              y={1085.69}
              width={175.748}
              height={28.347}
              style={{
                fill: "none"
              }}
            />
            <g id="text1165" transform="matrix(1,0,0,1,36.91,1104.06)">
              <text
                x="0px"
                y="0px"
                style={{
                  fontFamily: "'Helvetica'",
                  fontSize: 14
                }}
              >
                {"Steinfurter Stra\xDFe"}
              </text>
            </g>
          </g>
          <g id="shape18-479" transform="matrix(1,0,0,1,725.711,-19.0335)">
            <path
              id="path1172"
              d="M0,1107.23L13.04,1114.04L78.24,985.352L66.9,979.682L0,1107.23Z"
              style={{
                fill: COLOR.NON_MARKED_AREA_BUT_RELEVANT,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
            <g
              id="text1174"
              transform="matrix(0.4695,-0.8829,0.8829,0.4695,27.0663,1078.43)"
            >
              <text
                x="0px"
                y="0px"
                style={{
                  fontFamily: "'Helvetica'",
                  fontSize: 12
                }}
              >
                {"Philippistra\xDFe"}
              </text>
            </g>
          </g>
          <g id="campus-leo18-tag" transform="matrix(1,0,0,1,-595,219.743)">
            <g id="shape1579-492" transform="matrix(1,0,0,1,632.979,-617.523)">
              <g id="rect1203" transform="matrix(1.14089,0,0,0.382408,-6,661.762)">
                <rect
                  x={0}
                  y={1029}
                  width={170.079}
                  height={85.04}
                  style={{
                    fill: COLOR.MARKED_AREA,
                    stroke: "rgb(21,23,27)",
                    strokeWidth: "0.75px",
                    strokeMiterlimit: 1
                  }}
                />
              </g>
              <g id="text1205" transform="matrix(1,0,0,1,6.73383,1076.31)">
                <g transform="matrix(18,0,0,18,167.792,0)" />
                <text
                  x="0px"
                  y="0px"
                  style={{
                    fontFamily: "'TrebuchetMS', 'Trebuchet MS', sans-serif",
                    fontSize: 18,
                    fill: COLOR.NON_MARKED_AREA_BUT_RELEVANT
                  }}
                >
                  {"Leonardo-Campus 18"}
                </text>
              </g>
            </g>
            <g
              id="shape1580-505"
              transform="matrix(0.411355,0.455167,-0.741911,0.670498,1352.48,-267.069)"
            >
              <path
                id="path1230"
                d="M154.53,946.266L61.268,840.641"
                style={{
                  fill: "none",
                  fillRule: "nonzero",
                  stroke: "rgb(21,23,27)",
                  strokeWidth: "0.75px"
                }}
              />
            </g>
          </g>
          <g id="campus-leo18" transform="matrix(1,0,0,1,131.506,-569.831)">
            <path
              id="path952"
              d="M0,1110.77L66.57,1041.3L88.2,1062.1L39.06,1114.04L0,1110.77Z"
              style={{
                fill: COLOR.MARKED_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="campus-leo11-tag" transform="matrix(1,0,0,1,153.037,410)">
            <g id="shape1579-4921" transform="matrix(1,0,0,1,674.942,-471.52)">
              <g id="rect12031" transform="matrix(1.14089,0,0,0.382408,-6,661.762)">
                <rect
                  x={0}
                  y={1029}
                  width={170.079}
                  height={85.04}
                  style={{
                    fill: COLOR.MARKED_AREA,
                    stroke: "rgb(21,23,27)",
                    strokeWidth: "0.75px",
                    strokeMiterlimit: 1
                  }}
                />
              </g>
              <g id="text12051" transform="matrix(1,0,0,1,6.73383,1076.31)">
                <g transform="matrix(18,0,0,18,167.792,0)" />
                <text
                  x="0px"
                  y="0px"
                  style={{
                    fontFamily: "'TrebuchetMS', 'Trebuchet MS', sans-serif",
                    fontSize: 18,
                    fill: COLOR.NON_MARKED_AREA_BUT_RELEVANT
                  }}
                >
                  {"Leonardo-Campus 11"}
                </text>
              </g>
            </g>
            <g transform="matrix(0.352658,0.479045,-0.478602,0.563384,1076.12,-154.648)">
              <path
                id="path12301"
                d="M417.461,955.664L168.116,1081.17"
                style={{
                  fill: "none",
                  fillRule: "nonzero",
                  stroke: "rgb(21,23,27)",
                  strokeWidth: "0.75px"
                }}
              />
            </g>
          </g>
          <g
            id="campus-leo11"
            transform="matrix(1,0,0,1,695.639,-102.612)"
            ref={mapElements.leo11_building_on_campus}
          >
            <path
              id="path1042"
              d="M0,1093.56L14.601,1065.15L31.361,1032.55L68.341,960.621L108.181,981.092L39.83,1114.04L0,1093.56Zc"
              style={{
                fill: COLOR.MARKED_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="campus-leo10-tag" transform="matrix(1,0,0,1,145.958,330.26)">
            <g id="shape1579-4922" transform="matrix(1,0,0,1,662.021,-989.628)">
              <g id="rect12032" transform="matrix(1.14089,0,0,0.382408,-6,661.762)">
                <rect
                  x={0}
                  y={1029}
                  width={170.079}
                  height={85.04}
                  style={{
                    fill: COLOR.MARKED_AREA,
                    stroke: "rgb(21,23,27)",
                    strokeWidth: "0.75px",
                    strokeMiterlimit: 1
                  }}
                />
              </g>
              <g id="text12052" transform="matrix(1,0,0,1,6.73383,1076.31)">
                <g transform="matrix(18,0,0,18,167.792,0)" />
                <text
                  x="0px"
                  y="0px"
                  style={{
                    fontFamily: "'TrebuchetMS', 'Trebuchet MS', sans-serif",
                    fontSize: 18,
                    fill: COLOR.NON_MARKED_AREA_BUT_RELEVANT
                  }}
                >
                  {"Leonardo-Campus 10"}
                </text>
              </g>
            </g>
            <g
              id="shape1580-5052"
              transform="matrix(0.525944,0.58196,-0.948581,0.857275,1411.69,-822.221)"
            >
              <path
                id="path12302"
                d="M300.59,869.548L171.363,1087.74"
                style={{
                  fill: "none",
                  fillRule: "nonzero",
                  stroke: "rgb(21,23,27)",
                  strokeWidth: "0.75px"
                }}
              />
            </g>
          </g>
          <g id="campus-leo10" transform="matrix(1,0,0,1,531.999,-496.886)">
            <path
              id="path1133"
              d="M68.62,1102.4L55.24,1089.39L30.84,1114.04L0,1085.4L60.57,1019.46L90.67,1048.1L72.9,1068.19L88.17,1082.85L68.62,1102.4Z"
              style={{
                fill: COLOR.MARKED_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="campus-leo3-tag">
            <g id="shape1579-4923" transform="matrix(1,0,0,1,600,-965.52)">
              <g id="rect12033" transform="matrix(1.07056,0,0,0.382408,-6,661.762)">
                <rect
                  x={0}
                  y={1029}
                  width={170.079}
                  height={85.04}
                  style={{
                    fill: COLOR.MARKED_AREA,
                    stroke: "rgb(21,23,27)",
                    strokeWidth: "0.75px",
                    strokeMiterlimit: 1
                  }}
                />
              </g>
              <g id="text12053" transform="matrix(1,0,0,1,6.85639,1076.31)">
                <text
                  x="0px"
                  y="0px"
                  style={{
                    fontFamily: "'TrebuchetMS', 'Trebuchet MS', sans-serif",
                    fontSize: 18,
                    fill: COLOR.NON_MARKED_AREA_BUT_RELEVANT
                  }}
                >
                  {"Leonardo-Campus 1"}
                </text>
              </g>
            </g>
            <g
              id="shape1580-5053"
              transform="matrix(0.411355,0.455167,-0.741911,0.670498,1206.52,-597.329)"
            >
              <path
                id="path12303"
                d="M300.59,869.548L171.363,1087.74"
                style={{
                  fill: "none",
                  fillRule: "nonzero",
                  stroke: "rgb(21,23,27)",
                  strokeWidth: "0.75px"
                }}
              />
            </g>
          </g>
          <g
            id="campus-leo3"
            transform="matrix(1,0,0,1,459.19,-755.487)"
            ref={mapElements.leo3_building_on_campus}
          >
            <path
              id="path897"
              d="M50.69,1044.84L37.59,1032.94L24.569,1047.24L0,1024.88L41.859,978.881L68.149,1002.81L64.819,1006.49L110.63,1048.19L114.659,1043.76L140.8,1067.53L98.48,1114.04L77.72,1095.16L89.47,1082.23L73.01,1067.29L61.27,1080.18L37.87,1058.91L50.69,1044.84Z"
              style={{
                fill: COLOR.MARKED_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
          <g id="campus-leo1-tag" transform="matrix(1,0,0,1,93.921,78.0027)">
            <g id="shape1579-4924" transform="matrix(1,0,0,1,600,-965.52)">
              <g id="rect12034" transform="matrix(1.07056,0,0,0.382408,-6,661.762)">
                <rect
                  x={0}
                  y={1029}
                  width={170.079}
                  height={85.04}
                  style={{
                    fill: COLOR.MARKED_AREA,
                    stroke: "rgb(21,23,27)",
                    strokeWidth: "0.75px",
                    strokeMiterlimit: 1
                  }}
                />
              </g>
              <g id="text12054" transform="matrix(1,0,0,1,6.85639,1076.31)">
                <g transform="matrix(18,0,0,18,158.353,0)" />
                <text
                  x="0px"
                  y="0px"
                  style={{
                    fontFamily: "'TrebuchetMS', 'Trebuchet MS', sans-serif",
                    fontSize: 18,
                    fill: COLOR.NON_MARKED_AREA_BUT_RELEVANT
                  }}
                >
                  {"Leonardo-Campus 3"}
                </text>
              </g>
            </g>
            <g
              id="shape1580-5054"
              transform="matrix(0.411355,0.455167,-0.741911,0.670498,1206.52,-597.329)"
            >
              <path
                id="path12304"
                d="M300.59,869.548L171.363,1087.74"
                style={{
                  fill: "none",
                  fillRule: "nonzero",
                  stroke: "rgb(21,23,27)",
                  strokeWidth: "0.75px"
                }}
              />
            </g>
          </g>
          <g id="campus-leo1" transform="matrix(1,0,0,1,425.901,-863.515)">
            <path
              id="path1123"
              d="M0,1092.42L36.05,1052.28L60.119,1073.86L39.96,1096.71L24.06,1114.04L0,1092.42Z"
              style={{
                fill: COLOR.MARKED_AREA,
                fillRule: "nonzero",
                stroke: "rgb(21,23,27)",
                strokeWidth: "0.75px"
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
});
export default LeonardoCampus;
