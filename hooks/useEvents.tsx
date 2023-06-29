// IMPORT - BUILTINS
import useSWR from "swr";
import { Event } from "types/Events";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS

//const revalidate_events = 20;
const url = "https://ps-housetech.uni-muenster.de:444/api/drupal/event";
const options = { refreshInterval: 10 * 60 * 1000 };

/**
 * Fetch all Events
 * @returns Event[]
 */
export function useEvents() {
  const { data, isLoading, error } = useSWR<Event[]>(url, fetcher, options);

  return { data, isLoading, error };
}

const sampleEvents: Event[] = [
  {
    id: "4587",
    title:
      "GIGA Geb\u00e4rdensprache \u2013 A Bidirectional Translation System between the Deaf and the Hearing",
    subtitle: "",
    location: "Leo 18",
    description:
      "\u003Cp\u003E\u003Cstrong\u003ESpeaker:\u0026nbsp;\u003C/strong\u003EMichael Koddebusch\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EAbstract:\u003C/strong\u003E\u0026nbsp;Communication, especially oral communication, is a \u201cprerequisite to [...] success in life\u201d (Morreale et al. 2000). However, the way we communicate with each other is (structurally and historically) not of inclusive character because it withholds opportunities for equal participation in society from marginalized groups; in the case of Deaf people, one hereby speaks of audism - the discrimination of the Deaf community (Bauman 2004). Deaf people have always used signs for communication, and sign languages have become at least as multifaceted and complex as auditive languages (McBurney 2012). For a long time, sign languages were given the space to flourish. However, in the late 19th century, society committed itself to the auditory principle (McBurney 2012), which led to the systematic exclusion of the Deaf community from the core of society. While the political point of view on the Deaf community and their situation has changed today, communication barriers remain. Even though there are no reliable statistics, it is safe to assume that only a fraction of the common population can communicate in sign language. Therefore, Deaf people are commonly expected to adjust, e.g., by lip-reading. \u0026nbsp;Utilizing state-of-the-art machine learning methods, we aim to develop a sign language translation (SLT) system that works both ways: from sign language to written/spoken output, and from voice to an avatar employing sign language. Combined with the data processing rates of the 5G network, this system could be used on conventional smartphones (with state-of-the-art cameras and chips). This session of the Lunchtime Seminar gives an overview of a research project, GIGA Geb\u00e4rdensprache, which deals with a multitude of both social and technical challenges in designing and implementing digital assistive technologies to foster inclusion and allow communication at eye-level.\u0026nbsp;\u003C/p\u003E\r\n\r\n\u003Cp\u003EMorreale, S. P., Osborn, M. M. \u0026amp; Pearson, J. C. (2000), \u2018Why communication is important: A rationale for the centrality of the study of communication\u2019, J. Assoc. Commun. Adm. 29(1), 1.\u003Cbr /\u003E\r\nBauman, H.-D. L. (2004), \u2018Audism: Exploring the metaphysics of oppression\u2019, J. Deaf Stud. Deaf Educ. 9(2), 239\u2013246.\u003Cbr /\u003E\r\nMcBurney, S. (2012), History of sign languages and sign language linguistics, in \u2018Sign Lang.\u2019, De Gruyter Mouton, pp. 909\u2013948.\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EShort Bio:\u003C/strong\u003E\u0026nbsp;Michael Koddebusch is a doctoral candidate and research assistant at the Department for Information Systems at the University of M\u00fcnster. His research focuses on the digital transformation of the public sector, especially on business process management and\u003Cbr /\u003E\r\ne-competence development in this context. In addition he researches the development of information systems that promote accessibility and inclusion. Prior to that, he earned a Master\u0027s degree in Enterprise Information Management from Kingston University London and held different IT Project Management roles.\u003C/p\u003E\r\n",
    image: "https://www.wi.uni-muenster.de/sites/wi/files/images/michael_square.png",
    pubDate: "Thu, 27 Apr 2023 09:07:57",
    start_date: "Tue, 20 Jun 2023 10:30:00",
    end_date: "Tue, 20 Jun 2023 11:15:00"
  },
  {
    id: "4579",
    title: "TBD",
    subtitle: "",
    location: "",
    description:
      "\u003Cp\u003E\u003Cstrong\u003ESpeaker:\u0026nbsp;\u003C/strong\u003ESteffi Haag\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EAbstract: \u003C/strong\u003E(TBD)\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EShort Bio:\u003C/strong\u003E (TBD)\u003C/p\u003E\r\n",
    image: "",
    pubDate: "Mon, 03 Apr 2023 13:56:56",
    start_date: "Tue, 27 Jun 2023 10:30:00",
    end_date: "Tue, 27 Jun 2023 11:15:00"
  },
  {
    id: "4542",
    title:
      "1st Conference on Sustainability and Data - Connecting Perspectives Between Practicioners and Researchers",
    subtitle: "",
    location: "Virtual",
    description:
      "\u003Ch3\u003E\u003Ca href=\u0022https://evis.events/e/DataSustainability\u0022\u003E\u003Cstrong\u003E\u003Cspan\u003E1st Conference on Sustainability and Data \u003C/span\u003E \u003Cspan\u003E\u2013 \u003C/span\u003E\u003C/strong\u003E\u003Cbr /\u003E\r\n\u003Cspan\u003EConnecting Perspectives Between Practicioners and Researchers\u003C/span\u003E\u003C/a\u003E\u003C/h3\u003E\r\n\r\n\u003Cp\u003E\u003Cspan\u003E\u003Cstrong\u003EVirtual Conference, September 12\u003C/strong\u003E\u003C/span\u003E\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cspan\u003E2023 marks the midpoint of implementation of the 2030 Agenda for Sustainable Development, as it was established in 2015 through the UN General Assembly. The 2030 Agenda aims at fulfilling a series of Sustainable Development Goals (SDGs) that address three dimensions of sustainability: social, economic, and environmental.\u003C/span\u003E\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cspan\u003ESustainability data is an important component in measuring, monitoring, and benchmarking each country\u2019s progress in fulfilling the SDGs. As a result, organizations in both public and private sectors began to measure their sustainability performance digitally, ranging from organizational carbon footprint, energy consumption, gender diversity, and equal pay, to employment and financial results. Meanwhile, challenges also start to emerge in the governance, management, and handling of sustainability data, raising questions for practitioners and researchers who work at the intersection of sustainability and data.\u003C/span\u003E\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cspan\u003EThe \u003Cstrong\u003E1st Conference on Sustainability and Data (S\u0026amp;D)\u003C/strong\u003E is a platform that brings together sustainability and IT researchers, managers, and policymakers to share their experiences and challenges in working with sustainability data and to discuss concepts, practices, and processes that are important to making the SDGs more operationalizable. More specifically, the 1st S\u0026amp;D conference emphasizes the important role of the digital in implementing the SDGs, both from the perspective of sustainability data and the impact of digital solutions on sustainability. \u003C/span\u003E\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cspan\u003E\u003Cstrong\u003EWe, at the IT University of Copenhagen and the University of M\u00fcnster, invite you to be part of the conversation with sustainability and IT researchers, managers, and policy makers who work with the governance, strategy, and management of sustainability data.\u003C/strong\u003E The 1st S\u0026amp;D conference takes an interdisciplinary perspective on the implementation of SDGs, and resonates with the week of the \u003C/span\u003E\u003Ca href=\u0022https://www.un.org/en/conferences/SDGSummit2023\u0022\u003E\u003Cspan\u003E2023 SDG Summit\u003C/span\u003E\u003C/a\u003E\u003Cspan\u003E at the UN headquarters in New York to remind decision-makers of tangible innovative data solutions and challenges. \u0026nbsp;The conference takes the format of a dialog by bringing practitioners and researchers together under different topics, jointly reflecting on the existing discourses, practices, and transformative possibilities around sustainability data. \u003C/span\u003E\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cspan\u003EPlease make sure to register by \u003Cstrong\u003EAugust 31st\u003C/strong\u003E, 2023, if you would like to participate as an audience. \u003C/span\u003E\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cspan\u003E\u003Cstrong\u003EWe are looking forward to this day! \u003C/strong\u003E\u003C/span\u003E\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cspan\u003E\u003Cstrong\u003EYour Organizers, \u003C/strong\u003E\u003C/span\u003E\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cspan\u003EDr. Cancan Wang \u2013 for the Department of Business IT at the IT University of Copenhagen\u003C/span\u003E\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cspan\u003EDr. Lea P\u00fcchel \u2013 for the Digital Innovation and Public Sector Institute at the University of M\u00fcnster\u003C/span\u003E\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u0026nbsp;\u003C/p\u003E\r\n\r\n\u003Cp\u003E\u003Cspan\u003E--------------------------- \u003Ca class=\u0022ext \u0022 href=\u0022https://evis.events/e/DataSustainability\u0022\u003ESAVE YOUR SPOT HERE! -\u003C/a\u003E--------------------\u003C/span\u003E\u003C/p\u003E\r\n",
    image: "https://www.wi.uni-muenster.de/sites/wi/files/images/lp_header.png",
    pubDate: "Thu, 16 Feb 2023 12:58:33",
    start_date: "Mon, 11 Sep 2023 22:00:00",
    end_date: "Mon, 11 Sep 2023 22:00:00"
  }
];
