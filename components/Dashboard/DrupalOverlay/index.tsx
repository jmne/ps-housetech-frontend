import useDrupalOverlay from "hooks/useDrupalOverlay";
import { DrupalOverlay } from "./Overlay";

export default function DrupalOverlayHandler() {
  const { data, isLoading, error } = useDrupalOverlay();

  if (isLoading || error) return <></>;

  return (
    <>
      {data.map((overlay) => (
        <DrupalOverlay data={overlay} key={overlay.id} />
      ))}
    </>
  );
}
