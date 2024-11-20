import { Select } from "@mantine/core";
import classes from "./select.module.css";


const nothingFoundMessage = [
"Oops! 🦄 No options here!",
"Uh-oh! 🐢 Try another search!",
"Nothing to see! 🕵️‍♂️ Keep looking!",
"Whoops! 🐾 No matches found!",
"Try again! 🦉 No results yet!",
]
export default function CustomSelect({
  label,
  placeholder,
  value,
  onChange,
  data,
}: {
  label?: string;
  placeholder?: string;
  value?: string | null;
  onChange?: (value: string | null) => void;
  data: string[];
}) {
  return (
    <>
      <Select
        clearable
        searchable
        comboboxProps={{ withinPortal: true }}
        data={data}
        placeholder={placeholder}
        label={label}
        value={value}
        onChange={onChange}
        classNames={classes}
        nothingFoundMessage={nothingFoundMessage[Math.floor(Math.random() * nothingFoundMessage.length)]}
      />
    </>
  );
}
