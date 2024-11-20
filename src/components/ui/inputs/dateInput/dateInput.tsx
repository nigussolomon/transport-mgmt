import { DateInput } from "@mantine/dates";
import classes from "./dateInput.module.css";

export default function CustomDateInput({
  label,
  placeholder,
  value,
  onChange,
}: {
  label?: string;
  placeholder?: string;
  value?: Date | null;
  onChange?: (value: Date | null) => void;
}) {
  return (
    <DateInput
      clearable
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      classNames={classes}
    />
  );
}
