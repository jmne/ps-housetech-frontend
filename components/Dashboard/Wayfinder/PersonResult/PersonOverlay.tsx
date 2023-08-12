import { Employee } from "types/Employee";
import * as Overlay from "@/components/UI/Overlay";
import IconAccount from "assets/icons/account.svg";

import styles from "@/components/Dashboard/Wayfinder/PersonResult/person.module.scss";
import { QRContact } from "./QRContact";

const url = "https://ps-housetech.uni-muenster.de:444/api/picture/";

interface props {
  person: Employee;
  imageID: string | null;
  setOpen: Function;
  open: boolean;
}

export function PersonOverlay({ person, imageID, setOpen, open }: props) {
  return (
    <Overlay.Container open={open} setOpen={setOpen}>
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
