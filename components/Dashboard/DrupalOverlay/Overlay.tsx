import * as Dialog from "@radix-ui/react-dialog";
import { useTimeoutContext } from "context/TimeoutContext";
import { useEffect, useState } from "react";

import { Overlay } from "types/Drupal";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";
import { Trigger } from "./Trigger";
import Content from "./Content";

interface Props {
  data: Overlay;
}

export function DrupalOverlay({ data }: Props) {
  const timeoutContext = useTimeoutContext();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const resetLayout = () => {
      setOpen(true);
    };

    const handler = new IdleHandler({
      origin: data.id,
      resetFunction: resetLayout
    });
    timeoutContext.manager && timeoutContext.manager.addResetListener(handler);

    return () => {
      timeoutContext.manager && timeoutContext.manager.removeResetListener(data.id);
    };
  }, [data.id, timeoutContext.manager]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Trigger />
      <Content data={data} open={open} setOpen={setOpen} />
    </Dialog.Root>
  );
}
