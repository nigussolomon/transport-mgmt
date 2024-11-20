import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Group, Button } from "@mantine/core";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="First Name" placeholder="First Name" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Last Name" placeholder="Last Name" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Email" placeholder="Email" />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}
