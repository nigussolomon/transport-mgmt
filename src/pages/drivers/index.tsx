import ProductsLayout from "./_layout";
import { columns, rows } from "@/lib/drivers/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Divider, Group, Button, Drawer } from "@mantine/core";
import { IconUsers } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "./_new";

export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <ProductsLayout
      title="DRIVERS"
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconUsers size={16} />}
          size="xs"
        >
          NEW DRIVER
        </Button>
      }
    >
      <Group grow gap="md">
        <CustomTextInput
          label="Search Driver"
          placeholder="Place your search here"
          value=""
          onChange={() => {}}
        />
        <CustomSelect
          label="Status"
          placeholder="Select a status"
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
        title="New Driver"
      >
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
