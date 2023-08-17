export interface Overlay {
  id: string;
  title: string;
  description: string;
  image: string;
  start_date: string;
  end_date: string;
}

export const sampleOverlay: Overlay[] = [
  {
    id: "4623",
    title: "10.08.2023 - 15-16 Uhr",
    description:
      "\u003Cp\u003E10.08.2023 - 15-16 Uhr10.08.2023 - 15-16 Uhr10.08.2023 - 15-16 Uhr10.08.2023 - 15-16 Uhr10.08.2023 - 15-16 Uhr\u003C/p\u003E\n\u003Cp\u003E\u003Cimg alt=\u0022\u0022 height=\u0022300\u0022 src=\u0022/sites/wi/files/aacsb_accredited.jpg\u0022 width=\u0022300\u0022 /\u003E\u003C/p\u003E\n",
    image: "https://www.wi.uni-muenster.de/sites/wi/files/img_20220314_150026.jpg",
    start_date: "1691672400",
    end_date: "1691676000"
  }
];
