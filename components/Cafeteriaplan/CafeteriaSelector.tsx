import styles from "./Cafeteriaplan.module.scss";
import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { AllCafeterias, Cafeteria } from "hooks/useCafeteriaplan";
import { useTranslation } from "next-i18next";
import { PropsWithChildren, forwardRef } from "react";

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
      <Select.Trigger className={styles.selectTrigger} aria-label="Cafeteria">
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
              <span className={styles.title}>
                {t("cafeteria_plan.cafeteria.select_cafeteria")}
              </span>
              {AllCafeterias.map((cafeteria) => (
                <SelectItem
                  className={styles.selectItem}
                  //@ts-ignore
                  value={cafeteria}
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
  ({ children, className, ...props }: selectItem, forwardedRef) => {
    return (
      <Select.Item
        className={styles.selectItem}
        {...props}
        //@ts-ignore
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
