import { Employee } from "types/Employee";
import * as Dialog from "@radix-ui/react-dialog";
import IconClose from "assets/images/icon_close.svg";
import IconAccount from "assets/images/icon_account.svg";

import indexStyles from "@/pages/index.module.scss";
import styles from "@/components/Wayfinder/PersonResult/person.module.scss";
import { QRContact } from "./QRContact";

const url = "https://ps-housetech.uni-muenster.de:444/api/picture/";

interface props {
  person: Employee;
  setOverlayOpen: Function;
  imageID: string | null;
}

export function PersonOverlay({ person, setOverlayOpen, imageID }: props) {
  function handleClose() {
    setOverlayOpen(false);
  }

  return (
    <Dialog.Portal>
      <Dialog.Content
        className={[indexStyles.overlayContainer, styles.overlayContainer].join(" ")}
      >
        <Dialog.Title className={styles.overlayTitle}>
          <h2>
            {person.cfFirstNames} {person.cfFamilyNames}
          </h2>
          {person.academicTitle && <span>{person.academicTitle}</span>}
        </Dialog.Title>
        <Dialog.Description asChild>
          <div className={styles.overlayBody}>
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
            {false &&
              person.phones.map((phoneNumer, index) => {
                return <QRContact type="phone" value={phoneNumer} key={index} />;
              })}
            {person.emails.map((mailAddress, index) => {
              return <QRContact type="mail" value={mailAddress} key={index} />;
            })}
          </div>
        </Dialog.Description>
        <Dialog.Close asChild>
          <button className={indexStyles.close} onClick={handleClose}>
            <IconClose />
          </button>
        </Dialog.Close>
      </Dialog.Content>
      <Dialog.Overlay className={indexStyles.overlayBackground} />
    </Dialog.Portal>
  );
}
