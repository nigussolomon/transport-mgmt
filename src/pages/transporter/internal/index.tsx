import ProductsLayout from "../_layout";
import { columns, rows } from "@/lib/transporter/internal/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Divider, Group, Button, Drawer } from "@mantine/core";
import { IconTir } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "./_new";

export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <ProductsLayout
      title="INTERNAL TRANSPORTERS"
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconTir size={16} />}
          size="xs"
        >
          NEW INTERNAL TRANSPORTER
        </Button>
      }
    >
      <Group grow gap="md">
        <CustomTextInput
          label="Search Internal Transporter"
          placeholder="Place your search here"
          value=""
          onChange={() => {}}
        />

        <CustomSelect
          label="Transporter Manager"
          placeholder="Select a transporter manager"
          value=""
          onChange={() => {}}
          data={[]}
        />
        <CustomSelect
          label="Transporter Location"
          placeholder="Select a transporter location"
          value=""
          onChange={() => {}}
          data={[]}
        />
      </Group>
      <Divider my="md" />
      <Drawer
        size="lg"
        opened={opened}
        onClose={close}
        title="New Internal Transporter"
      >
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
