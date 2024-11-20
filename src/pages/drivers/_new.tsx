import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
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
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Phone Number" placeholder="Phone Number" />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}