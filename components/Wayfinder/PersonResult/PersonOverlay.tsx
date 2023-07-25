import { Employee } from "types/Employee";
import * as Overlay from "@/components/Overlay";
import IconAccount from "assets/images/icon_account.svg";

import styles from "@/components/Wayfinder/PersonResult/person.module.scss";
import { QRContact } from "./QRContact";

const url = "https://ps-housetech.uni-muenster.de:444/api/picture/";

interface props {
  person: Employee;
  imageID: string | null;
}

export function PersonOverlay({ person, imageID }: props) {
  return (
    <Overlay.Container>
      <Overlay.Header>
        <Overlay.Title>
          {person.cfFirstNames} {person.cfFamilyNames}
        </Overlay.Title>
        {person.academicTitle && (
          <Overlay.SubTitle>{person.academicTitle}</Overlay.SubTitle>
        )}
      </Overlay.Header>
      <Overlay.Body className={styles.overlayBody}>
        <div className={styles.imageWrapper}>
          {imageID ? (
            <img
              src={`${url}${imageID}`}
              className={styles.profileImage}
              alt={"Profile Picture"}
            />
          ) : (
            <IconAccount className={styles.profileImage} />
          )}
        </div>
        {person.emails.map((mailAddress, index) => {
          return <QRContact type="mail" value={mailAddress} key={index} />;
        })}
      </Overlay.Body>
    </Overlay.Container>
  );
}
