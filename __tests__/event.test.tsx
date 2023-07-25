import { Event } from "types/Events";
import { render } from "@testing-library/react";
import { EventCard } from "@/components/News/Events/Event";

describe("Event-Card", () => {
  test("Renders without crashing", () => {
    render(<EventCard data={sampleEvent} />);
  });
});

const sampleEvent: Event = {
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
};
