import ProductsLayout from "../_layout";
import { columns, rows } from "@/lib/personal/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Divider, Group, Button, Drawer } from "@mantine/core";
import { IconUserSquareRounded } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "../_new";

export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <ProductsLayout
      title="ORDER MANAGERS"
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconUserSquareRounded size={16} />}
          size="xs"
        >
          NEW MANAGER
        </Button>
      }
    >
      <Group grow gap="md">
        <CustomTextInput
          label="Search Order Manager"
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
      <Drawer opened={opened} onClose={close} title="New Order Manager">
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
