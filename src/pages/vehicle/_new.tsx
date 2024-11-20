import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Group, Button } from "@mantine/core";

export default function New() {
  return (
    <div>
      <Group gap="md">
      <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Vehicle ID" placeholder="Vehicle ID" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Vehicle Model" placeholder="Vehicle Model" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Vehicle Make" placeholder="Vehicle Make" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Vehicle Year" placeholder="Vehicle Year" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Vehicle Color" placeholder="Vehicle Color" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Vehicle Max Capacity (KG)" placeholder="Vehicle Max Capacity (KG)" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomSelect data={[]} label="Driver" placeholder="Driver" />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}
