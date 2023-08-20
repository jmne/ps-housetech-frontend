import styles from "@/components/Dashboard/Cafeteriaplan/Cafeteriaplan.module.scss";
import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { forwardRef, PropsWithChildren, Ref } from "react";
import stylesButton from "@/components/UI/Button/Button.module.scss";
import { BirdColor, useFlappyDataContext } from "../Game/Logic/flappyData";

const colorOptions: BirdColor[] = ["blue", "red", "yellow"];

export function BirdSelector() {
  const flappyContext = useFlappyDataContext();

  return (
    <Select.Root
      value={flappyContext.birdColor}
      onValueChange={(value) => {
        if (value === "blue" || value === "red" || value === "yellow")
          flappyContext.setBirdColor(value);
      }}
    >
      <Select.Trigger
        className={[styles.selectTrigger, stylesButton.base].join(" ")}
        style={{ alignSelf: "center" }}
        aria-label="Bird color"
      >
        <Select.Value aria-label={flappyContext.birdColor}>
          {flappyContext.birdColor}
        </Select.Value>
        <Select.Icon className={styles.selectIcon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content className={styles.selectContent}>
        <Select.Viewport className={styles.selectViewport}>
          <Select.Group className={styles.selectGroup}>
            <Select.Label className={styles.selectLabel}>
              {colorOptions.map((color) => (
                <SelectItem className={styles.selectItem} value={color} key={color}>
                  {color}
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
        style={{ textTransform: "capitalize" }}
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
