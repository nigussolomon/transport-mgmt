import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Group, Button } from "@mantine/core";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group grow style={{ width: "100%" }}>
          <CustomSelect
            data={[]}
            label="Transporter Code"
            placeholder="Transporter Code"
          />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput
            label="Transporter Name"
            placeholder="Transporter Name"
          />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Description" placeholder="Description" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomSelect data={[]} label="Manager" placeholder="Manager" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Location" placeholder="Location" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Contact" placeholder="Contact" />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}
