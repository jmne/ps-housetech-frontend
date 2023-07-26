import styles from "./Cafeteriaplan.module.scss";
import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { AllCafeterias, Cafeteria } from "hooks/useCafeteriaplan";
import { useTranslation } from "next-i18next";
import { PropsWithChildren, Ref, forwardRef } from "react";
import stylesButton from "@/components/Button/Button.module.scss";

interface props {
  state: Cafeteria;
  setState: Function;
}

export function CafeteriaSelector({ state, setState }: props) {
  const { t } = useTranslation("index");
  return (
    <Select.Root
      value={state}
      //@ts-ignore
      onValueChange={setState}
    >
      <Select.Trigger
        className={[styles.selectTrigger, stylesButton.base].join(" ")}
        aria-label="Cafeteria"
      >
        <Select.Value aria-label={state}>
          {t(`cafeteria_plan.cafeteria.${state}`)}
        </Select.Value>
        <Select.Icon className={styles.selectIcon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content className={styles.selectContent}>
        <Select.Viewport className={styles.selectViewport}>
          <Select.Group className={styles.selectGroup}>
            <Select.Label className={styles.selectLabel}>
              {AllCafeterias.map((cafeteria) => (
                <SelectItem
                  className={styles.selectItem}
                  //@ts-ignore
                  value={cafeteria}
                  key={cafeteria}
                >
                  {t(`cafeteria_plan.cafeteria.${cafeteria}`)}
                </SelectItem>
              ))}
            </Select.Label>
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
}

interface selectItem extends PropsWithChildren {
  className?: string;
  value: string;
}

const SelectItem = forwardRef(
  ({ children, className, ...props }: selectItem, forwardedRef: Ref<HTMLDivElement>) => {
    return (
      <Select.Item
        className={[styles.selectItem, className].join(" ")}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={styles.selectItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

SelectItem.displayName = "Select Item";
