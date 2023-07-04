// IMPORT - BUILTINS
import useSWR from "swr";
import { Post } from "types/Instagram";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS

const url = "https://ps-housetech.uni-muenster.de:444/api/instagram";
const options = { refreshInterval: 10 * 60 * 1000 };

/**
 * Fetch all Instagram Posts
 * @returns Post[]
 */
export function useInstagram() {
  //const { data, isLoading, error } = useSWR<Post[]>(url, fetcher, options);

  return { data: samplePost, isLoading: false, error: false };
}

const samplePost: Post[] = [
  {
    caption:
      "Eine Gruppe von acht Studierenden ist diese Woche zusammen mit Armin Stein und Katrin Bergener in Atlanta, um dort mit Studierenden der University of West Georgia und des Georgia College im Rahmen des Design Thinking-Vertiefungsmoduls im Bachelorstudium an einer Challenge zu arbeiten. Die Challenge kommt in diesem Jahr von @southwire, einem gro\u00dfen US-amerikanischen Kabelhersteller aus Atlanta.\n\nNeben der inhaltlichen Arbeit steht nat\u00fcrlich auch die interkulturelle Kommunikation und das Kennenlernen der amerikanischen Kultur im Mittelpunkt.",
    media_url:
      "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/356590868_1325369448076902_2353701708307473847_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=G4Xu5wXSkPQAX-hupge&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfBryNSbHfT5FJ7ZbPK86Bk-FqRJFCbqbbW6HdC82FjHtA&oe=64A839AB",
    timestamp: "2023-06-30T09:37:25+0000"
  },
  {
    caption:
      "Das Team hinter diesem Account sucht Verst\u00e4rkung! Wir sind Studierende verschiedener Studieng\u00e4nge und sind gemeinsam an der Entwicklung und Umsetzung von Ideen beteiligt, um Studierende und Studieninteressierte in den sozialen Medien anzusprechen.\n\nDu hast Lust, uns im Social Media/Marketing oder der Videoproduktion und -bearbeitung zu unterst\u00fctzen? Dann freuen wir uns auf deine Bewerbung! Die ausf\u00fchrlichen Stellenausschreibungen findest du auch nochmal \u00fcber den Link in der Bio.\n\n#wwumuenster #wirtschaftsinformatik #stellenausschreibung #studentischehilfskraft #socialmedia #marketing #Videoproduktion #job #muenster #universit\u00e4t",
    media_url:
      "https://scontent-fra5-2.cdninstagram.com/v/t51.29350-15/356276413_615114554048561_2219948986090889561_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=BNhhsl7VoA0AX9i2dI6&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfDPvhW99egOpsup1msUyjWQOaVc9kFeVq4uyPGygcDsBw&oe=64A98ECC",
    timestamp: "2023-06-29T09:41:27+0000"
  },
  {
    caption:
      "Die vergangenen zwei Wochen durften wir einen weiteren Sch\u00fclerpraktikanten bei uns begr\u00fc\u00dfen - Dominik ist Sch\u00fcler des Hittorf Gymnasiums und hat sein Schulpraktikum an unserem Institut absolviert.\ud83d\ude0a\n\nDabei hatte er die Gelegenheit, verschiedene Einblicke in Forschung und Lehre zu erhalten. Er nahm an Seminaren teil, programmierte einen Roboter und tauschte sich mit Doktorand*innen \u00fcber ihre Projekte aus.\ud83e\uddd1\u200d\ud83d\udcbb\n\nDas Highlight seines Praktikums war die Veranstaltung der Kinderuni: Gemeinsam mit Katrin Bergener und Christian Grimme hat er hierzu die vierte Klasse einer Grundschule besucht, um Kindern die Wirtschaftsinformatik n\u00e4herzubringen.",
    media_url:
      "https://scontent-fra5-1.cdninstagram.com/v/t51.29350-15/356034720_1235490540502869_246384005345541230_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=zsWWovnyMMwAX8imfiU&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfA8hRjyjMFIhdihWh8jULb-N6z5Xh-LLSNZa-0z0XpE4Q&oe=64A7E1F6",
    timestamp: "2023-06-26T14:18:47+0000"
  },
  {
    caption:
      'Bereits zum zweiten Mal hat das European Research Center for Information Systems (ERCIS) den ERCIS Master Thesis Award verliehen.\n\nInitiiert wurde die Idee dieser Auszeichnung von M\u00fcnsteraner Studierenden und etabliert sich mittlerweile als Anerkennung des ERCIS-Netzwerks f\u00fcr exzellente Abschlussarbeiten von Studierenden. Alle Mitglieder des Netzwerks k\u00f6nnen hierbei eine Masterarbeit f\u00fcr den Award nominieren. Neben der Arbeit muss ein Empfehlungsschreiben der Betreuer*innen und eine aufgezeichnete 10-min\u00fctige Pr\u00e4sentation der Studierenden vorgelegt werden. Als Preis wird die Teilnahme an der jeweils n\u00e4chsten European Conference on Information Systems (ECIS) verliehen.\n\nDen diesj\u00e4hrigen ERCIS Master Thesis Award erhielt Eric Amann von der Universit\u00e4t Koblenz f\u00fcr seine Arbeit "Prototyping of a Predictive Process Monitoring Dashboard" w\u00e4hrend des ERCIS@ECIS-Empfangs in Kristiansand, Norwegen. Betreut wurde die Arbeit von Prof. Dr. Patrick Delfmann.\nNeben Erics Arbeit wurden noch zwei weitere Arbeiten als "Runner-up" ausgezeichnet:\n- Thomas Balbach, KU Leuven, f\u00fcr die Arbeit "Does Official Language Proficiency Lead to Bureaucratic Discrimination of Cross-Border Citizens? Ein Korrespondenzexperiment in Deutschland".\n- Janina Pohl, Universit\u00e4t M\u00fcnster, f\u00fcr die Arbeit "Using Language Models for Benchmarking Manipulation Detection in Social Media".',
    media_url:
      "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/355982512_973035620489392_2640157758288395280_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=xKOhOelh-GgAX8yh6El&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfAHJ9NTkGXY93bWTAjrOQrzmW1s6wRC6XFgb1f9QJCKdw&oe=64A835DD",
    timestamp: "2023-06-25T15:32:11+0000"
  },
  {
    caption:
      "Nach dem Bachelor in Wirtschaftsinformatik an unserem Institut hast du viele M\u00f6glichkeiten. Die Digitalisierung ist in allen Bereichen unserer Gesellschaft pr\u00e4sent und erfordert die Expertise von Wirtschaftsinformatiker*innen. Eine M\u00f6glichkeit ist, dein Wissen in einem Masterstudium zu vertiefen. Daf\u00fcr stehen dir an unserem Institut die beiden englischsprachigen Masterstudieng\u00e4nge \u201cMaster of Science in Information Systems\u201d oder der \u201cErasmus Mundus Master of Science in Public Sector Innovation and E-Governance (PIONEER)\u201d zur Verf\u00fcgung. Mit unserem Bachelorstudiengang vermitteln wir dir aber auch alle notwendigen F\u00e4higkeiten und Kenntnisse f\u00fcr einen direkten Berufseinstieg in das vielversprechende Feld der Wirtschaftsinformatik.\n\n\u27a1\ufe0f Du m\u00f6chtest auch Teil eines zukunftsorientierten und abwechslungsreichen Studiengangs sein? Dann bewirb dich noch bis zum 15. Juli f\u00fcr das Wirtschaftsinformatik-Studium an der Universit\u00e4t M\u00fcnster!\ud83d\udc69\u200d\ud83d\udcbb\ud83d\udc68\u200d\ud83d\udcbb\n\nFoto: WWU - Nike Gais",
    media_url:
      "https://scontent-fra3-2.cdninstagram.com/v/t51.29350-15/355419761_638157414617629_40836556188601115_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=kf1HKH9M3yMAX9Jemz1&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfBusLTte5lDaOIHLs1XOtisKaUsvc24oA517wdB2GU-EQ&oe=64A9BE96",
    timestamp: "2023-06-23T08:38:23+0000"
  }
];
