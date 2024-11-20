import { TextInput } from "@mantine/core";
import classes from "./textInput.module.css";

export default function CustomTextInput({
  label,
  placeholder,
  value,
  onChange,
  secure,
}: {
  label?: string;
  placeholder?: string;
  value?: string;
  secure?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <TextInput
        type={secure ? "password" : "text"}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        classNames={classes}
      />
    </>
  );
}
